import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState, useEffect, useRef, Component } from 'react';

import * as searchServices from '~/apiServices/searchServices';

import styles from './Search.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import { SearchIcon } from '~/component/Icon';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    // tìm kiếm
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    // Cách thức hoạt ffoojng của debounce
    // B1: lần đầu tiên Component chạy xong thì debounce có giá trị rỗng
    // B2: khi ngừng gõ thì sau 500ms thì nó set lại debounce và trả về giá trị mới

    // khi người dùng ngừng gõ 500ms thì debounce đc update bằng giá trị mới nhất của searchValue
    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        // setTimeout(() => {
        //     setSearchResult([1, 1]); //chưa có kqua tìm kiếm sẽ ẩn đi
        // }, 0);
        if (!debounce.trim()) {
            setSearchResult([]); //xóa font tìm kiếm khi ko có từ khóa tìm kiếm
            return;
        }

        // có 2 cách để gọi API khi viết js trên front-end
        // 1. Sử dụng XMLHttpRequest (cú pháp rắc rối, khó hiểu)
        // 2. Sử dụng fetch (phổ biến)

        // encodeURIComponent(searchValue): mã hóa URI giá trị tìm kiếm nhập vào

        // Chưa dùng Axios
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then((res) => res.json())
        //     .then((res) => {
        //         // console.log(res.data);
        //         setSearchResult(res.data); // truyền data của API vào setSearchResult
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     });

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchServices.search(debounce);

            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]); // khi giá trị tìm kiếm thay đổi thì trả về kqua tìm kiếm

    const handleClear = () => {
        // nếu có searchValue, khi click vào vào button clear thì nó sẽ setSearchValue về rỗng và focus vào ô Input
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    // Hàm không cho nhập ký tự đầu tiên là space trong ô tìm kiếm
    const handleChange = (e) => {
        // đặt biến searchValueChange = giá trị nhập vào ô tìm kiếm
        const searchValueChange = e.target.value;

        // nếu searchValueChange ko bắt đầu bằng dấu cách thì cho nhập ký tự
        if (!searchValueChange.startsWith(' ')) {
            setSearchValue(searchValueChange);
        }
    };

    return (
        // Using a wapper <div> or<span> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                // content="Tìm kiếm" placement="right"
                interactive //để tương tác đc vs kqua tìm kiếm
                appendTo={() => document.body} //Fix warning thư viện Tippy
                visible={showResult && searchResult.length > 0} //nếu kết quả tìm kiếm lớn hơn ko thì mới hiện
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        {/* //search-result kế thừa độ rộng của search */}
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                            {/* <AccountItem /> */}
                        </PopperWrapper>
                    </div>
                )}
                // ẩn kết quả Search khi click ra ngoài
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search account and video"
                        spellCheck="false"
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    ></input>

                    {/* chuyển searchValue sang giá trị bolean: nếu có searchValue và ko có loading thì mới hiện button clear */}
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            {/* Clear */}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Loading */}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                    <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                        {/* Search */}
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass}></FontAwesomeIcon> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
