const baseUrl = "http://localhost:5500/users";


export const Register = async (user) => {
    console.log(user);
    try {
     return await (await fetch(baseUrl, {
       method: "POST",
       body: JSON.stringify({
        user: user,
       }),
       headers: {
         "Content-Type": "application/json",
       },
     })).json();
   } catch (err) {
     throw new Error(err);
   }
 };
 