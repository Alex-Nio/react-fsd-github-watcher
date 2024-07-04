export interface INavType {
  title: string;
  link: string;
}

export interface Owner {
  login: string;
  avatarUrl: string;
  url: string;
}

export interface Language {
  name: string;
}

export interface IRepository {
  id: string;
  name: string;
  url: string;
  description: string;
  stargazerCount: number;
  pushedAt: string;
  owner: Owner;
  languages: {
    nodes: Language[];
  };
}

export interface RootState {
  repositories: IRepository[];
  search: ISearchState;
}

export interface ISearchState {
  query: string;
  searchResults: IRepository[];
}
