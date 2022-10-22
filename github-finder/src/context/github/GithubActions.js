const GITHUB_URL = process.env.REACT_APP__GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_FINDER_TOKEN;

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `${GITHUB_TOKEN}`,
    },
  });
  const { items } = await response.json();

  // setUsers(items);
  // setLoading(false);

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  return items;
};
