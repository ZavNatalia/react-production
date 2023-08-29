import { useTranslation } from 'react-i18next';
import { useCallback, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    readonly?: boolean;
    onChange?: (value: Country) => void;
}

export const CountrySelect = (props: CountrySelectProps) => {
    const {
        className,
        value,
        readonly,
        onChange,
    } = props;
    const { t } = useTranslation('profile');

    const countryOptions = useMemo(
        () => Object.entries(Country).map((val) => ({ value: val[0], content: val[1] })),
        [],
    );

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        // <Select
        //     className={classNames('', {}, [className])}
        //     label={t('Country')}
        //     options={countryOptions}
        //     value={value}
        //     readonly={readonly}
        //     onChange={onChangeHandler}
        // />
        <ListBox
            className={classNames('', {}, [className])}
            items={countryOptions}
            value={value}
            defaultValue={t('Select country')}
            readonly={readonly}
            label={t('Country')}
            direction="bottom right"
            onChange={onChangeHandler}
        />
    );
};
