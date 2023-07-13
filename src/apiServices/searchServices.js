// lấy tất cả các export const trong file thì dùng *
import * as request from '~/utils/request';

// API search
export const search = async (q, type = 'less') => {
    try {
        const res = await request.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
