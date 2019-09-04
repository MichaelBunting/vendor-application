import React from 'react';

export interface StepProps {
  icon: string;
  content: string;
  index: number;
  showArrow?: boolean;
}

export default function Step({
  icon,
  content,
  index,
  showArrow = true,
}: StepProps) {
  return (
    <>
      <div className="mkt-card">
        <div className="mkt-icon mkt-icon--tucked">
          <img className="mkt-icon__img" src={icon} alt="icon" />
        </div>
        <div className="mkt-title">
          Step
          {' '}
          {index}
        </div>
        <div className="mkt-copy">
          {content}
        </div>
      </div>
      {showArrow && (
        <div className="mkt-how__arrow"><i className="fas fa-angle-right" /></div>
      )}
    </>
  );
}
