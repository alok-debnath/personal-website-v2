import { Button } from '@material-tailwind/react';

export function ButtonDefault({ buttonLabel, className }) {
  return <Button className={`normal-case ${className}`}>{buttonLabel}</Button>;
}
