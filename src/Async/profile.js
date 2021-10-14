
const baseUrl = "http://localhost:5500/profile/"

export const fetchOneTeacher = async (id) => {
  try {
    return await (await fetch(baseUrl + `${id}`)).json()
  } catch (err) {
    throw new Error(err);
  }
};



export const fetchOneAward = async (id) => {
  try {
    return await (await fetch(baseUrl + `awards/${id}`)).json()
  } catch (err) {
    throw new Error(err);
  }
};


export const fetchOneStudent = async (id) => {
  try {
    return await (await fetch(baseUrl + `students/${id}`)).json()
  } catch (err) {
    throw new Error(err);
  }
};








export const updateBio = async (data) => {
  const token = localStorage.getItem("token");
  console.log(data)
  const { values: { orgName,
    phone,
    city,
    orgAddress,
    orgCountry,
    orgState,
    bio,
  }, userID: id, selectedFile } = data
  const formData = new FormData();
  formData.append("orgName", orgName);
  formData.append("phone", phone);
  formData.append("city", city);
  formData.append("orgAddress", orgAddress);
  formData.append("orgCountry", orgCountry);
  formData.append("orgState", orgState);
  formData.append("bio", bio);
  formData.append("pics", selectedFile);
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
    body: { formData }
  };

  try {
    return await await fetch(baseUrl + `${id}`, requestOptions);
  } catch (err) {
    throw new Error(err);
  }
};