import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function DivLink({ label, to }) {
    return (
        <Link to={to} className={cx('page-link')}>
            {label}
        </Link>
    );
}

DivLink.propTypes = {
    label: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
};

export default DivLink;
