export const getUserData = () => {
  return fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log(`Error ->`, err));
};
