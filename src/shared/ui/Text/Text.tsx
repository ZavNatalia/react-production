import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text = (props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;
    return (
        <div className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
            {title && <h6 className={cls.title} data-testid="title">{title}</h6>}
            {text && <p className={cls.text} data-testid="text">{text}</p>}
        </div>
    );
};
