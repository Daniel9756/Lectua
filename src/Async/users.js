const baseUrl = "http://localhost:5500/users/";


export const fetchOneUser = async (id) => {
  try {
    return await (await fetch(baseUrl + id)).json()
  } catch (err) {
    throw new Error(err);
  }
};