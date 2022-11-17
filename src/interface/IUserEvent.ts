import type { components } from '@octokit/openapi-types';

type IEvent = components['schemas']['event'];

type ICommit = {
  sha: string;
  url: string;
  message: string;
  distinct: boolean;
  author: {
    email: string;
    name: string;
  };
};

type IRepository = components['schemas']['repository'] & {
  public: boolean;
};

export type IUserEvent = IEvent & {
  payload: {
    effective_date?: string;
    description?: string | null;
    master_branch?: string;
    pusher_type?: string;
    ref_type?: string;
    ref?: string;
    size?: number;
    distinct_size?: number;
    head?: string;
    push_id?: number;
    before?: string;
    number?: number;
    pull_request?: components['schemas']['pull-request'];
    release?: components['schemas']['release'];
    review?: components['schemas']['pull-request-review'];
    commits?: ICommit[];
    forkee?: IRepository;
    thread?: components['schemas']['thread'];
  };
};
