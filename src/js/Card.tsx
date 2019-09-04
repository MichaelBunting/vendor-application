import React from 'react';

export interface CardProps {
  icon: '../src/images/reach-icon.png';
  title: 'Increase Your Reach';
  content: React.ReactElement;
}

export default function Card({ icon, title, content }: CardProps) {
  return (
    <div className="mkt-card">
      <div className="mkt-icon mkt-icon--tucked">
        <img className="mkt-icon__img" src={icon} alt="Reach Icon" />
      </div>
      <div className="mkt-title">{title}</div>
      <div className="mkt-copy">
        {content}
      </div>
    </div>
  );
}
