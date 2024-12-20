import { Suspense } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/redesigned/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Card } from '@/shared/ui/redesigned/Card';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface LoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        className={classNames('', {}, [className])}
        lazy
        isOpen={isOpen}
        onClose={onClose}
    >
        <Suspense
            fallback={
                <Card variant="light">
                    <VStack gap="16" max>
                        <Skeleton width="60px" height="30px" />
                        <Skeleton width="60px" height="30px" />
                        <Skeleton width="60px" height="30px" />
                    </VStack>
                </Card>
            }
        >
            <LoginFormAsync onClose={onClose} />
        </Suspense>
    </Modal>
);
