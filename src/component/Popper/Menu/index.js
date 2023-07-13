import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';

import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import classNames from 'classnames/bind';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

//  onChange=defaultFn: gán bằng function rỗng, nếu onChange ko có gtri truyền từ bên ngoài vào thì nó lấy function rỗng=> onChange(item) ko bị lỗi
function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1]; //lấy phần tử cuối mảng

    const renderItems = () => {
        return current.data.map((item, index) => {
            // kiểm tra xem item có children ko
            // !! dùng để convert Boolean
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        // nếu là parent thì ms đẩy vào cấp 2
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            // nếu ko phải thẻ cha thì trả ra item người dùng click vào
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            // visible //để hiển thị menu = display:block
            offset={[12, 8]}
            hideOnClick={hideOnClick}
            interactive //để tương tác đc vs kqua tìm kiếm
            delay={[0, 700]} //delay 7s sau khi hover vào sẽ ẩn đi
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Language"
                                onBack={() => {
                                    // back lại nút ban đầu
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))} //reset menu về menu đầu tiên
        >
            {children}
        </Tippy>
    );
}

export default Menu;
