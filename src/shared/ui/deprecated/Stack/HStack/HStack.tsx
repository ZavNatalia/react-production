import { Flex, FlexProps } from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

/**
 * @deprecated
 * use v2 design
 */

export const HStack = (props: HStackProps) => {
    return <Flex direction="row" {...props} />;
};
