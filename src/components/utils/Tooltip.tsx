import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled } from '../../stitches/stitches.config';

const Container = styled('div', {
  background: '$backgroundPrimary',
  border: '1px solid $borderPrimary',
  borderRadius: 10,

  margin: '0.25rem',
  padding: '0.25rem 0.5rem',

  fontSize: '1rem',
});

interface Props {
  children: JSX.Element | JSX.Element[];
  content: string | number | JSX.Element | JSX.Element[];
}

export const Tooltip = ({ children, content }: Props) => {
  return (
    <TooltipPrimitive.Provider delayDuration={500} skipDelayDuration={250}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content asChild>
          <Container>{content}</Container>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};
