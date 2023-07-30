import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/component/Icon';
import config from '~/config';
import Button from '~/component/Button/Button';
import Footer from './Footer/Footer';
// import SuggestedAccounts from '../SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            {/* Menu: For you, Following, LIVE */}
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                ></MenuItem>
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                ></MenuItem>
            </Menu>

            {/* Đã đăng nhập */}
            {/* Suggested accounts VS Following accounts */}
            {/* <SuggestedAccounts label="Suggested accounts" />
            <SuggestedAccounts label="Following accounts" /> */}

            {/* Chưa đăng nhập */}
            <div className={cx('title')}>
                <p className={cx('title-login')}>Đăng nhập để follow các tác giả, thích video và xem bình luận. </p>
                <Button className={cx('login-btn')} outline>
                    Đăng nhập
                </Button>
            </div>

            {/* Footer */}
            <Footer></Footer>
        </aside>
    );
}

export default Sidebar;
