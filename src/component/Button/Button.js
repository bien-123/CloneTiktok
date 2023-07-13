// import myAlert from '~/myAlert'

// function Button() {
//     return <button onClick={myAlert}>Click me!</button>
// }

// export default Button
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disable = false,
    rounded = false,

    small = false,
    large = false,

    leftIcon,
    rightIcon,

    children,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when btn is disabled
    if (disable) {
        // delete props.onClick;

        // lặp qua sự kiện trong DOM
        Object.keys(props).forEach((key) => {
            // nếu sự kiện bắt đầu bằng chữ 'on' hoặc loại sự kiện là function thì xóa sự kiện
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    // link nội bộ
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        // link ra ngoài
        props.href = href;
        Comp = 'a';
    }

    // biến gọi tên class
    const classes = cx('wrapper', {
        primary,
        outline,
        text,
        disable,
        rounded,

        small,
        large,

        [className]: className, //khi có className thì nó lấy giá trị className làm key cho [className]
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
