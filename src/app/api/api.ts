import axios from 'axios';

export async function fetchAllRepositories(query: string, count: number = 10) {
  const url = 'https://api.github.com/graphql';

  const accessToken = import.meta.env.VITE_GITHUB_API_ACCESS_TOKEN;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  // GraphQL запрос
  const graphqlQuery = `
        query {
            search(query: "${query}", type: REPOSITORY, first: ${count}) {
                nodes {
                    ... on Repository {
                        id
                        name
                        url
                        description
                        stargazerCount
                        pushedAt
                        owner {
                            login
                            avatarUrl
                            url
                        }
                        languages(first: 5) {
                            nodes {
                                name
                            }
                        }
                    }
                }
            }
        }
    `;

  try {
    const response = await axios.post(
      url,
      { query: graphqlQuery },
      { headers }
    );

    return response.data.data.search.nodes;
  } catch (error) {
    console.error('Ошибка при выполнении запроса к GitHub API:', error);
    throw error;
  }
}

export async function fetchUserRepositories(user: string) {
  const url = 'https://api.github.com/graphql';

  const accessToken = import.meta.env.VITE_GITHUB_API_ACCESS_TOKEN;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const graphqlQuery = `
    query {
        search(query: "user:${user}", type: USER, first: 10) {
            nodes {
                ... on User {
                    repositories(first: 10, orderBy: {field: UPDATED_AT, direction: DESC}) {
                        nodes {
                            id
                            name
                            url
                            description
                            stargazerCount
                            pushedAt
                            owner {
                                login
                                avatarUrl
                                url
                            }
                            languages(first: 5) {
                                nodes {
                                    name
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;

  try {
    const response = await axios.post(
      url,
      { query: graphqlQuery },
      { headers }
    );

    return response.data.data.search.nodes[0].repositories.nodes;
  } catch (error) {
    console.error('Ошибка при выполнении запроса к GitHub API:', error);
    throw error;
  }
}
