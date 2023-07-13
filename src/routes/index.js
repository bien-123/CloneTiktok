import routesConfig from '~/config/routes';

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
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },

    // { path: '/profile', component: Profile },
    { path: routesConfig.profile, component: Profile },

    // { path: '/upload', component: Upload, layout: null },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },

    { path: routesConfig.search, component: Search, layout: null },
];

// dùng cho Router phải đăng nhập mới vào đc
const privateRoutes = [];

export { publicRoutes, privateRoutes };
