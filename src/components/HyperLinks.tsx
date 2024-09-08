import React from 'react';

interface HyperLinksProps {
  className?: string;
  style?: React.CSSProperties;
  href: string | undefined;
  content: string | JSX.Element;
}
const HyperLinks: React.FC<HyperLinksProps> = ({
  className = '',
  style,
  href,
  content,
}) => {
  const props = href
    ? {
        className,
        style,
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        className,
        style,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
      };
  return <a {...props}>{content}</a>;
};

export default HyperLinks;
