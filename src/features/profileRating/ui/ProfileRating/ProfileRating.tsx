import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { RatingCard } from '@/entities/Rating';
import { useProfileRating, useRateProfile } from '@/features/profileRating/api/profileRatingApi';

export interface ProfileRatingProps {
    className?: string;
    profileId: string;
}

const ProfileRating = memo(({ className, profileId }: ProfileRatingProps) => {
    const { t } = useTranslation();
    const userData = useSelector(getUserAuthData);
    const { data, isLoading } = useProfileRating({
        profileId,
        userId: userData?.id ?? '',
    });

    const [rateProfileMutation] = useRateProfile();

    const handleRateProfile = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateProfileMutation({
                userId: userData?.id ?? '',
                profileId,
                rate: starsCount,
                feedback,
            });
        } catch (e) {
            // handle error
            console.log(e);
        }
    }, [profileId, rateProfileMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateProfile(starsCount, feedback);
    }, [handleRateProfile]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateProfile(starsCount);
    }, [handleRateProfile]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height="120px" />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            className={className}
            rate={rating?.rate}
            title={t('Rate the profile')}
            feedbackTitle={t('Leave your feedback about the profile, it will help improve the quality')}
            hasFeedback
            onCancel={onCancel}
            onAccept={onAccept}
        />
    );
});

export default ProfileRating;
