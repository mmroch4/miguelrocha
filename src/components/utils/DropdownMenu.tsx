import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ReactNode } from 'react';
import { styled } from '../../stitches/stitches.config';

const Container = styled('div', {
  maxWidth: 300,
  minWidth: 200,

  background: '$backgroundPrimary',
  border: '1px solid $borderPrimary',
  borderRadius: 10,

  padding: '0.5rem 1rem',
  margin: '0.25rem 0.5rem',
});

interface Props {
  children: JSX.Element | JSX.Element[];
  content: ReactNode;
}

export const DropdownMenuItem = DropdownMenuPrimitive.Item;
export const DropdownMenuLabel = DropdownMenuPrimitive.Label;

export const DropdownMenu = ({ children, content }: Props) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>{children}</DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content asChild>
          <Container>{content}</Container>
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
};
