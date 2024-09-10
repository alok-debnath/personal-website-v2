import React from 'react';

interface HyperLinksProps {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  style?: React.CSSProperties;
  href: string | undefined;
  content: string | JSX.Element;
  ariaLabel?: string;
}
const HyperLinks: React.FC<HyperLinksProps> = ({
  as: Component = 'a',
  className = '',
  style,
  href,
  content,
  ariaLabel,
}) => {
  const props = href
    ? {
        className,
        style,
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
        'aria-label': ariaLabel,
      }
    : {
        className,
        style,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
        'aria-label': ariaLabel,
      };
  return <Component {...props}>{content}</Component>;
};

export default HyperLinks;

