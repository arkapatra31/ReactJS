//Using Axios is optional
import axios from "axios";

const GITHUB_URL = process.env.REACT_APP__GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_FINDER_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: { Authorization: GITHUB_TOKEN },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const result = await github.get(`/search/users?${params}`);
  return result.data.items;

  // const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
  //   headers: {
  //     Authorization: `${GITHUB_TOKEN}`,
  //   },
  // });
  // const { items } = await response.json();

  //The above part is commented as we are using axios

  // setUsers(items);
  // setLoading(false);

  //   dispatch({
  //     type: "GET_USERS",
  //     payload: items,
  //   });
  //return items;
};

//Replacing getUser and getUserRepos with a single function.
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);

  return { user: user.data, repos: repos.data };
};

// //Search specific user
// export const getUser = async (login) => {
//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `${GITHUB_TOKEN}`,
//     },
//   });

//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     return data;
//   }
// };

// //GET User Repos
// export const getUserRepos = async (login) => {
//   const params = new URLSearchParams({
//     sort: "created",
//     per_page: 10,
//   });
//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
//     headers: {
//       Authorization: `${GITHUB_TOKEN}`,
//     },
//   });
//   const data = await response.json();

//   // setUsers(items);
//   // setLoading(false);

//   return data;
// };