const baseUrl = " http://localhost:5500/message";


export const sendMessage = async (values) => {
  try {
    return await await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        values: values.values
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};
