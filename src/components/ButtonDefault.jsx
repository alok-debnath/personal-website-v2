import { Button } from '@material-tailwind/react';

const ButtonDefault = ({
  buttonLabel,
  size = 'md',
  className = '',
  fullWidth = false,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      size={size}
      className={`group border border-emerald bg-transparent normal-case duration-300 ease-in-out hover:border-slate hover:bg-emerald ${className}`}
    >
      <span className='text-emerald duration-300 ease-in-out group-hover:text-black'>
        {buttonLabel}
      </span>
    </Button>
  );
};

export default ButtonDefault;
