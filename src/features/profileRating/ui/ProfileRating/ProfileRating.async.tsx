import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui/deprecated/Skeleton';
import { ProfileRatingProps } from '../ProfileRating/ProfileRating';

const ProfileRatingLazy = lazy(() => import('./ProfileRating'));

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
    return (
        <Suspense fallback={<Skeleton width="100%" height={140} />}>
            <ProfileRatingLazy {...props} />
        </Suspense>
    );
};
