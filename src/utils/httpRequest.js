import axios from 'axios';

// console.log(process.env);
// NODE_ENV: 'development';// ta có thể thay development bằng production để hiện chức năng này trên production mà ko hiện trên development và ngược lại

const httpRequest = axios.create({
    // lấy URL chính vào đây
    baseURL: process.env.REACT_APP_BASE_URL,
});

// gọi phương thức get
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};

export default httpRequest;
