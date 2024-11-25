import {
    ImgHTMLAttributes,
    memo,
    ReactElement,
    useLayoutEffect,
    useState,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    fallback?: ReactElement;
    errorFallback?: ReactElement;
}

export const AppImage = memo((props: AppImageProps) => {
    const {
        className,
        src,
        alt = 'image',
        fallback,
        errorFallback = (
            <img
                className={classNames('', {}, [className])}
                src="https://www.shutterstock.com/image-vector/image-icon-600nw-211642900.jpg"
                alt={alt}
            />
        ),
        ...otherProps
    } = props;
    const [isLoading, seIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();
        img.src = src ?? '';
        img.onload = () => {
            seIsLoading(false);
        };
        img.onerror = () => {
            seIsLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }
    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img
            className={classNames('', {}, [className])}
            src={src}
            alt={alt}
            {...otherProps}
        />
    );
});
