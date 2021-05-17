const baseUrl = "http://localhost:5500/lectures";

export const fetchData = async () => {
  try {
    return await (await fetch(baseUrl)).json();
  } catch (err) {
    throw new Error(err);
  }
};

export const addLecture = async (lecture) => {
   try {
    return await await fetch(baseUrl, {
      method: "POST",
      body: JSON.stringify({
        lecture: lecture.values,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const removeLecture = async (id) => { 
  try {
    return await fetch(`http://localhost:5500/lectures/${id}`, {
      method: "DELETE",
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const fetchOneEvent = async (id) => { 
  try {
    return await (await fetch(`http://localhost:5500/lectures/${id}`)).json()
    
  } catch (err) {
    throw new Error(err);
  }
};