import React from 'react';

export interface FeatureProps {
  img: string;
  title: string;
  content: string;
  link: {
    text: string;
    href: string;
  };
  alignment: string;
}

export default function Feature({
  img,
  title,
  content,
  link,
  alignment,
}: FeatureProps) {
  return (
    <div className="mkt-article">
      <div className={`mkt-article__img mkt-article__img--${alignment === 'left' ? 'right' : 'left'}`}>
        <img src={img} alt="feature" />
      </div>
      <div className={`mkt-article__card mkt-article__card--${alignment}`}>
        <div className="mkt-title">{title}</div>
        <div className="mkt-copy">
          {content}
        </div>
        <a className="mkt-link" href={link.href}>
          {link.text}
          {' '}
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </div>
  );
}
