import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slices/addCommentFormSlice';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(
    ({ className, onSendComment }: AddCommentFormProps) => {
        const { t } = useTranslation();
        const text = useSelector(getAddCommentFormText);
        const error = useSelector(getAddCommentFormError);
        const dispatch = useAppDispatch();

        const onCommentTextChange = useCallback(
            (value: string) => {
                dispatch(addCommentFormActions.setText(value));
            },
            [dispatch],
        );

        const onSendHandler = useCallback(() => {
            onSendComment(text || '');
            onCommentTextChange('');
        }, [onCommentTextChange, onSendComment, text]);

        return (
            <DynamicModuleLoader reducers={reducers}>
                <HStack
                    className={classNames(cls.AddCommentForm, {}, [className])}
                    justify="between"
                    gap="8"
                    max
                    data-testid="AddCommentForm"
                >
                    <Input
                        className={cls.input}
                        placeholder={t('Enter the comment text')}
                        value={text}
                        data-testid="AddCommentForm.Input"
                        onChange={onCommentTextChange}
                    />
                    <Button
                        disabled={!text}
                        variant="outline"
                        data-testid="AddCommentForm.Button"
                        onClick={onSendHandler}
                    >
                        {t('Send')}
                    </Button>
                </HStack>
            </DynamicModuleLoader>
        );
    },
);

export default AddCommentForm;
