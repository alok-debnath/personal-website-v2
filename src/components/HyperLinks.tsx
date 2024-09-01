import React from 'react';

interface HyperLinksProps {
  className: string;
  href: string;
  content: string | JSX.Element;
}
const HyperLinks: React.FC<HyperLinksProps> = ({
  className,
  href,
  content,
}) => {
  const props = href
    ? {
        className,
        href,
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {
        className,
        onClick: (e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault(),
      };
  return <a {...props}>{content}</a>;
};

export default HyperLinks;
