import axios from "axios";

export const fetchMock = async () => {
  const response = await axios.get("/api/users");
  return response.data;

  // 구조분해할당으로 코드 줄일 수 있음
  //   const {data} = await axios.get("/api/users");
  //   return data
};

export const fetchAddUser = async (user) => {
  const response = await axios.post("/api/users", user);
  return response.data;
};

export const fetchDeleteUser = async (id) => {
  const response = await axios.delete(`/api/users/${id}`);
  return response.data;
};

export const fetchUpdateUser = async (id, user) => {
  const response = await axios.put(`/api/users/${id}`, user);
  return response.data;
};
