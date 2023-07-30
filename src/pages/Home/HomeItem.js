// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';

import styles from './Home.module.scss';
import Download from '../../assets/video/Download.mp4';
import Button from '~/component/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from '~/component/Image';
import { faBookmark, faComment, faHeart, faMusic, faShare } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HomeItem() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>
                    <Image
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        className={cx('avatar')}
                    ></Image>
                    <div className={cx('header')}>
                        <div className={cx('info')}>
                            <div>
                                <div className={cx('name')}>
                                    <div className={cx('info-name')}>
                                        <div className={cx('auth-name')}>
                                            <div className={cx('nick-name')}>baolynee</div>
                                            <div className={cx('full-name')}>A Ly</div>
                                        </div>

                                        <div className={cx('title')}>
                                            <span className={cx('label')}> Not minh tinh. I am tinh tinh </span>
                                            <div className={cx('hag-tag')}>#xh</div>
                                            <div className={cx('hag-tag')}>#xuhuong</div>
                                        </div>

                                        <div className={cx('info-music')}>
                                            <a href="/" className={cx('music')}>
                                                <FontAwesomeIcon className={cx('icon')} icon={faMusic} />
                                                <div className={cx('user-music')}>Nhạc nền Lê Bảo</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('video-wrapper')}>
                                    <div className={cx('video-card-container')}>
                                        <ReactPlayer
                                            className={cx('video')}
                                            width={'100%'}
                                            height={500}
                                            controls={true}
                                            playing={true}
                                            url={Download}
                                        >
                                            <div className={cx('report')}>Báo cáo</div>
                                        </ReactPlayer>
                                    </div>

                                    <div className={cx('action-item-container')}>
                                        <button className={cx('action-item')} title="Like">
                                            {/* <span className={cx('like-icon')}></span> */}
                                            <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
                                            <strong className={cx('text')}>303.7K</strong>
                                        </button>
                                        <button className={cx('action-item')} title="Bình luận">
                                            {/* <span className={cx('like-icon')}></span> */}
                                            <FontAwesomeIcon className={cx('like-icon')} icon={faComment} />
                                            <strong className={cx('text')}>1747</strong>
                                        </button>
                                        <button className={cx('action-item')} title="Thêm mục yêu thích">
                                            {/* <span className={cx('like-icon')}></span> */}
                                            <FontAwesomeIcon className={cx('like-icon')} icon={faBookmark} />
                                            <strong className={cx('text')}>9687</strong>
                                        </button>
                                        <button className={cx('action-item')} title="Chia sẻ">
                                            {/* <span className={cx('like-icon')}></span> */}
                                            <FontAwesomeIcon className={cx('like-icon')} icon={faShare} />
                                            <strong className={cx('text')}>238</strong>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <Button className={cx('follow-btn')} outline>
                                Follow
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <button className={cx('download')}>Tải ứng dụng</button>
        </>
    );
}

export default HomeItem;
