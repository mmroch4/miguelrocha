import type { IFilteredEvent } from '../interface/IFilteredEvent';
import type { IUserEvent } from '../interface/IUserEvent';
import { Translation } from '../locales';
import { formatDate } from './format-date';

export class GithubEvents {
  constructor(private translation: Translation) {}

  private github: {
    url: string;
    profile: string;
    fullUrl: string;
  } = {
    url: 'https://github.com',
    profile: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
    fullUrl: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  };

  private getType(refType: string): 'Repo' | 'Branch' | 'Tag' {
    let type: 'Repo' | 'Branch' | 'Tag' = 'Repo';

    switch (refType) {
      case 'repository': {
        type = 'Repo';

        break;
      }
      case 'branch': {
        type = 'Branch';

        break;
      }
      case 'tag': {
        type = 'Tag';

        break;
      }
    }

    return type;
  }

  public filterEvents(events: IUserEvent[]): IFilteredEvent[] {
    const IFilteredEvents = events.map(({ type, payload, repo, created_at }) => {
      switch (type) {
        case 'PushEvent': {
          const headCommitSha = payload.head;
          const headCommit = payload.commits?.find(({ sha }) => sha === headCommitSha);

          return {
            path: `${this.github.url}/${repo.name}/commits/${headCommitSha}`,
            action: 'Pushed',
            title: headCommit?.message,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'CreateEvent': {
          return {
            path: `${this.github.url}/${repo.name}/${
              payload.ref_type === 'repository' ? '' : `tree/${payload.ref}`
            }`,
            action: `${this.getType(payload.ref_type as string)} Created`,
            title: payload.ref_type === 'repository' ? repo.name : payload.ref,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'DeleteEvent': {
          const type = this.getType(payload.ref_type as string);

          return {
            path:
              type === 'Repo'
                ? `${this.github.url}/${this.github.profile}`
                : `${this.github.url}/${repo.name}`,
            action: `${type} Deleted`,
            title: payload.ref,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'WatchEvent': {
          return {
            path: `${this.github.url}/${repo.name}`,
            action: 'Watched',
            title: repo.name,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'ForkEvent': {
          return {
            path: payload.forkee?.html_url,
            action: 'Forked',
            title: repo.name,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        // case 'SponsorshipEvent': {
        // }
        case 'ReleaseEvent': {
          return {
            path: payload.release?.html_url,
            action: 'Released',
            title: payload.release?.name,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'PullRequestEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: `Pull Request ${
              payload.action === 'opened'
                ? 'Opened'
                : payload.pull_request?.merged
                ? 'Accepted'
                : 'Denied'
            }`,
            title: payload.pull_request?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'PullRequestReviewEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: 'Pull Request Reviewed',
            title: payload.pull_request?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'PullRequestReviewCommentEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: 'Pull Request Review Commented',
            title: payload.pull_request?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'PullRequestReviewThreadEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: `Pull Request Thread ${
              payload.action === 'resolved' ? 'Resolved' : 'Unresolved'
            }`,
            title: payload.pull_request?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'PublicEvent': {
          return {
            path: `${this.github.url}/${repo.name}`,
            action: 'Public',
            title: repo.name,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        // case 'MemberEvent': {
        // }
        case 'IssuesEvent': {
          return {
            path: payload.issue?.html_url,
            action: `Issue ${payload.action === 'opened' ? 'Opened' : 'Closed'}`,
            title: payload.issue?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'IssueCommentEvent': {
          return {
            path: payload.issue?.html_url,
            action: 'Issue Commented',
            title: payload.issue?.title,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'GollumEvent': {
          return {
            path: payload.pages?.[0].html_url,
            action: `Wiki Page ${payload.pages?.[0].action === 'created' ? 'Created' : 'Edited'}`,
            title: payload.pages?.[0].page_name,
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }
        case 'CommitCommentEvent': {
          return {
            path: payload.comment?.html_url,
            action: 'Commit Commented',
            title: '',
            date: formatDate(created_at as string, this.translation.date.template, {
              locale: this.translation.date.locale,
              displayDistance: true,
            }),
          };
        }

        default: {
          return {
            path: this.github.fullUrl,
            action: 'New',
            title: 'A new event',
            date: '',
          };
        }
      }
    });

    return IFilteredEvents;
  }
}
