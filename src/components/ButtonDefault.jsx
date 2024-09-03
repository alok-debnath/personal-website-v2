import { Button } from '@material-tailwind/react';

const ButtonDefault = ({
  buttonLabel,
  size = 'md',
  onclick = () => {},
  className = '',
  fullWidth = false,
}) => {
  return (
    <Button
      fullWidth={fullWidth}
      size={size}
      onClick={onclick}
      className={`group border border-emerald bg-transparent normal-case text-emerald shadow-sm duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-emerald/30 ${className}`}
    >
      <div className=''>{buttonLabel}</div>
    </Button>
  );
};

export default ButtonDefault;
