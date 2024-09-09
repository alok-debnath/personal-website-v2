import { Button, ButtonProps } from '@material-tailwind/react';

interface ButtonDefaultProps extends Omit<ButtonProps, 'children'> {
  buttonLabel: string;
}

const ButtonDefault = ({
  buttonLabel,
  size = 'md',
  onClick = () => {},
  className = '',
  fullWidth = false,
  ...props
}: ButtonDefaultProps) => {
  return (
    <Button
      className={`group border border-emerald bg-transparent normal-case text-emerald shadow-sm duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-emerald/30 ${className}`}
      fullWidth={fullWidth}
      onClick={onClick}
      size={size}
      placeholder={''}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
      {...props}
    >
      <div className=''>{buttonLabel}</div>
    </Button>
  );
};

export default ButtonDefault;
