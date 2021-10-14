const baseUrl = "http://localhost:5500/enrolls/";


export const fetchMySubjects = async (id) => {
    const token = localStorage.getItem("token");
    try {
        return await (await fetch(baseUrl + `${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,               
            },
        })).json();
    } catch (err) {
        throw new Error(err);
    }
};

export const addDetail = async (details) => {
    console.log(details.values)
    try {
        return await await fetch(baseUrl, {
            method: "POST",
            body: JSON.stringify({
                details: details.values,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (err) {
        throw new Error(err);
    }
};


export const removeDetail = async (id) => {
    try {
        return await fetch(baseUrl + `${id}`, {
            method: "DELETE",
        });
    } catch (err) {
        throw new Error(err);
    }
};


export const fetchOneDetail = async (id) => {
    try {
        return await (await fetch(`http://localhost:5500/lecturedetail/${id}`)).json()

    } catch (err) {
        throw new Error(err);
    }
};