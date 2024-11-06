import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Button } from '@/shared/ui/redesigned/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

interface EditableProfilePageHeaderProps {
    className?: string;
    error?: string;
}

export const EditableProfilePageHeader = memo(
    ({ className, error }: EditableProfilePageHeaderProps) => {
        const { t } = useTranslation();
        const readonly = useSelector(getProfileReadonly);
        const dispatch = useAppDispatch();
        const authData = useSelector(getUserAuthData);
        const profileData = useSelector(getProfileData);
        const canEdit = authData?.id === profileData?.id;

        const onEdit = useCallback(() => {
            dispatch(profileActions.setReadonly(false));
        }, [dispatch]);

        const onCancelEdit = useCallback(() => {
            dispatch(profileActions.cancelEdit());
        }, [dispatch]);

        const onSave = useCallback(() => {
            dispatch(updateProfileData());
        }, [dispatch]);

        return (
            <HStack
                className={classNames('', {}, [className])}
                justify="between"
                max
            >
                <Text title={t('Profile')} size="l" variant="accent" />
                {canEdit && (
                    <div>
                        {readonly ? (
                            <Button
                                variant="filled"
                                disabled={!!error}
                                data-testid="EditableProfilePageHeader.EditButton"
                                onClick={onEdit}
                            >
                                {t('Edit')}
                            </Button>
                        ) : (
                            <HStack gap="8">
                                <Button
                                    variant="outlineRed"
                                    data-testid="EditableProfilePageHeader.CancelButton"
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    variant="filled"
                                    data-testid="EditableProfilePageHeader.SaveButton"
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                    </div>
                )}
            </HStack>
        );
    },
);
