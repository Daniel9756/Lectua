const baseUrl = "http://localhost:5500/users";


export const fetchOneUser = async (id) => { 
  try {
    return await (await fetch(`http://localhost:5500/users/${id}`)).json()    
  } catch (err) {
    throw new Error(err);
  }
};