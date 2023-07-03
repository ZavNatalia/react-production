import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './CommentList.module.scss';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';

interface CommentListProps {
    className?: string;
    isLoading?: boolean;
    comments?: Comment[];
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, isLoading, comments } = props;

    useEffect(() => {
        console.log('comments', comments?.length);
    }, [comments]);

    const { t } = useTranslation();
    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? (
                    comments.map((comment) => (
                        <CommentCard
                            className={cls.comment}
                            key={comment.id}
                            isLoading={isLoading}
                            comment={comment}
                        />
                    ))
                )
                : (
                    <Text text={t('No comments')} />
                )}
        </div>
    );
});
