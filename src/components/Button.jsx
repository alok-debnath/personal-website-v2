import { Button } from '@material-tailwind/react';

export function ButtonDefault({ buttonLabel, size = 'md', className = '', fullWidth = false }) {
  return (
    <Button
      fullWidth={fullWidth}
      size={size}
      className={`normal-case bg-transparent border border-emerald ${className}`}>
      <span className='text-emerald'>{buttonLabel}</span>
    </Button>
  );
}
