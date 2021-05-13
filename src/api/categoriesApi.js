import axiosClient from "./axiosClient";

const categoriesApi = {
  getAll: (params) => {
    const url = '/category';
    return axiosClient.get(url, { params });
  },


}

export default categoriesApi;