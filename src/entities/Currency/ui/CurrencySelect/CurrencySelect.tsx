import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { classNames } from 'shared/lib/classNames/classNames';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;
    const { t } = useTranslation('profile');

    const currencyOptions = useMemo(
        () => Object.entries(Currency).map((val) => ({ value: val[0], content: val[1] })),
        [],
    );

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <ListBox
            className={classNames('', {}, [className])}
            items={currencyOptions}
            value={value}
            defaultValue={t('Select currency')}
            readonly={readonly}
            label={t('Currency')}
            direction="bottom right"
            onChange={onChangeHandler}
        />
    );
});
