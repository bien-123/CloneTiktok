import axios from 'axios';

const request = axios.create({
    // lấy URL chính vào đây
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

// gọi phương thức get
export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
};

export default request;
