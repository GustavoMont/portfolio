const BASE_URL = "https://graphql.datocms.com/";
const TOKEN = process.env.NEXT_DATOCMS_API_TOKEN_RO;
const DEFAULT_CONFIG = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

const createRequester = (
  url = BASE_URL,
  config: RequestInit = DEFAULT_CONFIG,
) => {
  return {
    async post<T>(body: T) {
      return fetch(url, {
        ...config,
        method: "POST",
        body: JSON.stringify(body),
      });
    },
  };
};

export const api = createRequester();
