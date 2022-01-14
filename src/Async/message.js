const baseUrl = " http://localhost:5500/messages";


export const sendMessage = async (values) => {
  console.log(values,"frm Async func")
  try {
    return await await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        values
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
