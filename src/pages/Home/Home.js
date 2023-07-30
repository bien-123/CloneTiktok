import classNames from 'classnames/bind';
import ReactPlayer from 'react-player';

import styles from './Home.module.scss';
import Download from '../../assets/video/Download.mp4';
import HomeItem from './HomeItem';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <HomeItem />
        </>
    );
    // <h2 style={{ height: 2000 }}>Home pages</h2>;
}

export default Home;
