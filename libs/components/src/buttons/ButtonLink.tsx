import { Button, ButtonProps } from '@mui/material';
import Link from 'next/link';

export interface ButtonLinkProps extends ButtonProps {
  href: string;
}

export function ButtonLink(props: ButtonProps) {
  return (
    <Button component={Link} {...props}>
      {props.children}
    </Button>
  );
}

export default ButtonLink;
