import type { IFilteredEvent } from '../interface/IFilteredEvent';
import type { IUserEvent } from '../interface/IUserEvent';

export class GithubEvents {
  private github: {
    url: string;
    profile: string;
    fullUrl: string;
  } = {
    url: 'https://github.com',
    profile: process.env.NEXT_PUBLIC_GITHUB_USERNAME as string,
    fullUrl: `https://github.com/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
  };

  private convertDate(toConvert: string): string {
    const date = new Date(toConvert).toLocaleString();

    return date;
  }

  private getType(refType: string): 'Repository' | 'Branch' | 'Tag' {
    let type: 'Repository' | 'Branch' | 'Tag' = 'Repository';

    switch (refType) {
      case 'repository': {
        type = 'Repository';

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
            date: this.convertDate(created_at as string),
          };
        }
        case 'CreateEvent': {
          return {
            path: `${this.github.url}/${repo.name}/${
              payload.ref_type === 'repository' ? '' : `tree/${payload.ref}`
            }`,
            action: `${this.getType(payload.ref_type as string)} Created`,
            title: payload.ref_type === 'repository' ? repo.name : payload.ref,
            date: this.convertDate(created_at as string),
          };
        }
        case 'DeleteEvent': {
          const type = this.getType(payload.ref_type as string);

          return {
            path:
              type === 'Repository'
                ? `${this.github.url}/${this.github.profile}`
                : `${this.github.url}/${repo.name}`,
            action: `${type} Deleted`,
            title: payload.ref,
            date: this.convertDate(created_at as string),
          };
        }
        case 'WatchEvent': {
          return {
            path: `${this.github.url}/${repo.name}`,
            action: 'Watched',
            title: repo.name,
            date: this.convertDate(created_at as string),
          };
        }
        case 'ForkEvent': {
          return {
            path: payload.forkee?.html_url,
            action: 'Forked',
            title: repo.name,
            date: this.convertDate(created_at as string),
          };
        }
        // case 'SponsorshipEvent': {
        // }
        case 'ReleaseEvent': {
          return {
            path: payload.release?.html_url,
            action: 'Released',
            title: payload.release?.name,
            date: this.convertDate(created_at as string),
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
            date: this.convertDate(created_at as string),
          };
        }
        case 'PullRequestReviewEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: 'Pull Request Reviewed',
            title: payload.pull_request?.title,
            date: this.convertDate(created_at as string),
          };
        }
        case 'PullRequestReviewCommentEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: 'Pull Request Review Commented',
            title: payload.pull_request?.title,
            date: this.convertDate(created_at as string),
          };
        }
        case 'PullRequestReviewThreadEvent': {
          return {
            path: payload.pull_request?.html_url,
            action: `Pull Request Thread ${
              payload.action === 'resolved' ? 'Resolved' : 'Unresolved'
            }`,
            title: payload.pull_request?.title,
            date: this.convertDate(created_at as string),
          };
        }
        case 'PublicEvent': {
          return {
            path: `${this.github.url}/${repo.name}`,
            action: 'Public',
            title: repo.name,
            date: this.convertDate(created_at as string),
          };
        }
        // case 'MemberEvent': {
        // }
        case 'IssuesEvent': {
          return {
            path: payload.issue?.html_url,
            action: `Issue ${payload.action === 'opened' ? 'Opened' : 'Closed'}`,
            title: payload.issue?.title,
            date: this.convertDate(created_at as string),
          };
        }
        case 'IssueCommentEvent': {
          return {
            path: payload.issue?.html_url,
            action: 'Issue Commented',
            title: payload.issue?.title,
            date: this.convertDate(created_at as string),
          };
        }
        case 'GollumEvent': {
          return {
            path: payload.pages?.[0].html_url,
            action: `Wiki Page ${payload.pages?.[0].action === 'created' ? 'Created' : 'Edited'}`,
            title: payload.pages?.[0].page_name,
            date: this.convertDate(created_at as string),
          };
        }
        case 'CommitCommentEvent': {
          return {
            path: payload.comment?.html_url,
            action: 'Commit Commented',
            title: '',
            date: this.convertDate(created_at as string),
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
