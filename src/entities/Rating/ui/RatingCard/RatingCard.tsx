import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { Text } from '@/shared/ui/redesigned/Text';
import { classNames } from '@/shared/lib/classNames/classNames';
import { StarRating } from '@/shared/ui/redesigned/StarRating';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/Button';
import { useDevice } from '@/shared/lib/hooks/useDevice/useDevice';
import { Drawer } from '@/shared/ui/redesigned/Drawer';
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
            className={classNames(cls.RatingCard, {}, [className])}
            border="roundBorder"
            data-testid="RatingCard"
            variant="light"
            padding="24"
        >
            <VStack align="center" gap="16" max>
                <Text
                    title={startsCount ? t('Thanks for the rating!') : title}
                />
                <StarRating
                    size={28}
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
                            variant="outlineGreen"
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
                                variant="outlineRed"
                                data-testid="RatingCard.Close"
                                onClick={cancelHandler}
                            >
                                {t('Close')}
                            </Button>
                            <Button
                                variant="outlineGreen"
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
