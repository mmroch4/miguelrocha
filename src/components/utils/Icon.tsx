import * as AccessibleIcon from '@radix-ui/react-accessible-icon';

interface Props {
  children: JSX.Element | JSX.Element[];
  label: string;
}

export const Icon = ({ children, label }: Props) => {
  return <AccessibleIcon.Root label={label}>{children}</AccessibleIcon.Root>;
};
