import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import DivLink from './DivLink';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <>
            <div className={cx('footer')}>
                <div className={cx('div-link')}>
                    <DivLink to="/" label="Giới thiệu" />
                    <DivLink to="/" label="Bảng tin" />
                    <DivLink to="/" label="Liên hệ" />
                    <DivLink to="/" label="Sự nghiệp" />
                    <DivLink to="/" label="ByteDance" />
                </div>

                <div className={cx('div-link')}>
                    <DivLink to="/" label="TikTok for Good" />
                    <DivLink to="/" label="Quảng cáo" />
                    <DivLink to="/" label="Developers" />
                    <DivLink to="/" label="TikTok Rewards" />
                    <DivLink to="/" label="TikTok Embeds" />
                </div>

                <div className={cx('div-link')}>
                    <DivLink to="/" label="Trợ giúp" />
                    <DivLink to="/" label="An toàn" />
                    <DivLink to="/" label="Điều khoản" />
                    <DivLink to="/" label="Quyền riêng tư" />
                    <DivLink to="/" label="Cổng thông tin Tác giả" />
                    <DivLink to="/" label="Hướng dẫn Cộng đồng" />
                </div>
                <div className={cx('div-link')}>
                    <DivLink to="/" label="Thêm"></DivLink>
                </div>
                <span className={cx('year')}>© 2023 TikTok</span>
            </div>
        </>
    );
}

export default Footer;
