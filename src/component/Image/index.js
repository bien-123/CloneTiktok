import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    // fallback: customFallback = images.noImage dùng ES6: fallback: customFallback (đổi tên fallback thành customFallback để tránh trùng vs tên fallback trong useState)
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage); //nếu ảnh gốc bị lỗi thì thay bằng ảnh khác
    };
    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src} // mặc định nếu có ảnh gốc thì lấy ảnh gốc
            alt={alt}
            {...props}
            onError={handleError} // nếu có lỗi xảy ra gọi đến hàm handleError
        ></img>
    );
});

export default Image;
