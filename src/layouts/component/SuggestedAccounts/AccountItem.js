// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy
                // visible
                interactive
                placement="bottom"
                delay={[800, 0]}
                offset={[-20, 0]} //căn vị trí của Tippy
                render={renderPreview} //render để hiển thị ra màn hình
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                        alt="Avatar"
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>Garena</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </p>
                        <p className={cx('name')}> Liên quân </p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
