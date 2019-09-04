import React from 'react';

export interface FAQProps {
  title: string;
  content: string;
}

export default function FAQProps({ title, content }: FAQProps) {
  return (
    <div className="mkt-card">
      <div className="mkt-title">{title}</div>
      <div className="mkt-copy">
        {content}
      </div>
    </div>
  );
}
