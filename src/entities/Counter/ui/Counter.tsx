import React, { useState } from 'react';
import { Button } from '@/shared/ui/deprecated/Button';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';
import { HStack, VStack } from '@/shared/ui/deprecated/Stack';
import { Input } from '@/shared/ui/deprecated/Input';
import { Card } from '@/shared/ui/deprecated/Card';

export const Counter = () => {
    const counterValue = useCounterValue();
    const [value, setValue] = useState('');
    const { increment, decrement, add, subtract } = useCounterActions();

    const handleInc = () => increment();

    const handleDec = () => decrement();

    const handleAdd = () => add(Number(value));

    const handleSubtract = () => subtract(Number(value));

    const handleInput = (v: string) => setValue(v);

    return (
        <Card>
            <VStack gap="16">
                <h1 data-testid="value-title">{counterValue}</h1>
                <HStack gap="8">
                    <Button data-testid="decrement-button" onClick={handleDec}>
                        -1
                    </Button>
                    <Button data-testid="increment-button" onClick={handleInc}>
                        +1
                    </Button>
                </HStack>
                <HStack gap="8">
                    <Input onChange={handleInput} value={value} type="number" />
                    <Button data-testid="plus-button" onClick={handleAdd}>
                        +
                    </Button>
                    <Button data-testid="minus-button" onClick={handleSubtract}>
                        -
                    </Button>
                </HStack>
            </VStack>
        </Card>
    );
};
