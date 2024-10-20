import React from 'react';

interface LinkProps {
  content: React.ReactNode;
  url: string;
}

const Link: React.FC<LinkProps> = ({ content, url }) => {
  return (
    <a href={url} className="text-blue-500 hover:underline">
      {content}
    </a>
  );
};

export default Link;