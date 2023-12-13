import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/deprecated/Card';
import { Text } from '@/shared/ui/deprecated/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { StarRating } from '@/shared/ui/deprecated/StarRating';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Modal } from '@/shared/ui/deprecated/Modal';
import { Input } from '@/shared/ui/deprecated/Input';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/deprecated/Drawer';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string;
    feedbackTitle?: string;
    hasFeedback?: boolean;
    onCancel?: (starsCount: number) => void;
    onAccept?: (starsCount: number, feedback?: string) => void;
    rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate,
    } = props;
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startsCount, setStartsCount] = useState(rate ?? 0);
    const [feedback, setFeedback] = useState('');
    const isMobile = useDevice();

    const onSelectStarts = useCallback(
        (selectedStarsCount: number) => {
            setStartsCount(selectedStarsCount);
            if (hasFeedback) {
                setIsModalOpen(true);
            } else {
                onAccept?.(selectedStarsCount);
            }
        },
        [hasFeedback, onAccept],
    );

    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        onAccept?.(startsCount, feedback);
    }, [feedback, onAccept, startsCount]);

    const cancelHandler = useCallback(() => {
        setIsModalOpen(false);
        onCancel?.(startsCount);
    }, [onCancel, startsCount]);

    const modalContent = (
        <>
            <Text title={feedbackTitle} />
            <Input
                className={cls.input}
                placeholder={t('Your feedback')}
                value={feedback}
                data-testid="RatingCard.Input"
                onChange={setFeedback}
            />
        </>
    );

    return (
        <Card
            className={classNames('', {}, [className])}
            max
            data-testid="RatingCard"
        >
            <VStack align="center" gap="8" max>
                <Text
                    title={startsCount ? t('Thanks for the rating!') : title}
                />
                <StarRating
                    size={24}
                    selectedStars={startsCount}
                    onSelect={onSelectStarts}
                />
            </VStack>
            {isMobile ? (
                <Drawer isOpen={isModalOpen} lazy onClose={cancelHandler}>
                    <VStack gap="32">
                        {modalContent}
                        <Button
                            fullwidth
                            theme={ButtonTheme.OUTLINE_RED}
                            onClick={cancelHandler}
                        >
                            {t('Send')}
                        </Button>
                    </VStack>
                </Drawer>
            ) : (
                <Modal isOpen={isModalOpen} lazy>
                    <VStack gap="16" className={cls.modal}>
                        {modalContent}
                        <HStack max gap="16" justify="end">
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                data-testid="RatingCard.Close"
                                onClick={cancelHandler}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                data-testid="RatingCard.Send"
                                onClick={acceptHandler}
                            >
                                {t('Send')}
                            </Button>
                        </HStack>
                    </VStack>
                </Modal>
            )}
        </Card>
    );
});
