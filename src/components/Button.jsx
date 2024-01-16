import { Button } from '@material-tailwind/react';

export function ButtonDefault({ buttonLabel, size = 'md', className = '', fullWidth = false }) {
  return (
    <Button
      fullWidth={fullWidth}
      size={size}
      className={`group normal-case bg-transparent border-emerald hover:bg-emerald border hover:border-slate duration-300 ease-in-out ${className}`}>
      <span className='group-hover:text-black text-emerald duration-300 ease-in-out'>{buttonLabel}</span>
    </Button>
  );
}
