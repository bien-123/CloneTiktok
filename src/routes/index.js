import config from '~/config';

// Layout
import { HeaderOnly } from '~/layouts';

// file này dùng để định nghĩa các Router trong pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// dùng cho Router ko cần đăng nhập vẫn xem đc
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },

    // { path: '/profile', component: Profile },
    { path: config.routes.profile, component: Profile },

    // { path: '/upload', component: Upload, layout: null },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },

    { path: config.routes.search, component: Search, layout: null },
];

// dùng cho Router phải đăng nhập mới vào đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
