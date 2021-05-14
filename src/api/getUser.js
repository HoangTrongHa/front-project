import axiosClient from "./axiosClient";


const getUser = {
    getAll: (params) => {
      const url = '/getUser';
      return axiosClient.get(url, { params });
    },
    login: (params) => {
      const url = '/login'
      return axiosClient.post(url, { params });
    }
  }
  
  export default getUser;