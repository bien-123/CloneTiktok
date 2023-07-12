// Layout
import { HeaderOnly } from '~/component/Layout';

// file này dùng để định nghĩa các Router trong pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// dùng cho Router ko cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },

    // { path: '/profile', component: Profile },
    { path: '/@:nickname', component: Profile },

    // { path: '/upload', component: Upload, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },

    { path: '/search', component: Search, layout: null },
];

// dùng cho Router phải đăng nhập mới vào đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
