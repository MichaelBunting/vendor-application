import React from 'react';

import Form from './Form';
import Card, { CardProps } from './Card';
import Feature, { FeatureProps } from './Feature';
import Step, { StepProps } from './Step';
import FAQ, { FAQProps } from './FAQ';

import '../scss/styles.scss';

interface VendorProps {
  theme?: string;
  logo: string;
  cards: CardProps[];
  quote: {
    content: React.ReactElement;
    name: string;
    company: string;
  };
  brands: string[];
  features: FeatureProps[];
  steps: StepProps[];
  faq: FAQProps[];
  about: string[];
}

export default function Vendor({
  theme = 'web',
  logo,
  cards,
  quote,
  brands,
  features,
  steps,
  faq,
  about,
}: VendorProps) {
  return (
    <div className={`mkt-landing ${`theme--${theme}`}`}>
      <div className="mkt-hero">
        <svg className="mkt-hero__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,100 100,0 100,101" />
        </svg>
        <div className="mkt-hero__bg" />
      </div>

      <div className="mkt-container">
        <div className="mkt-hero__container">
          <img className="mkt-hero__logo" src={logo} alt="WebstaurantStore" />
          <h1 className="mkt-hero__headline">Sell Your Products</h1>
          <h1 className="mkt-hero__headline mkt-hero__headline--small">on the Largest Restaurant Supply&nbsp;Store</h1>
          <a className="mkt-button mkt-button--white" href="#mkt-form">Apply to Sell</a>
        </div>
        <div className="mkt-container__inner mkt-container__inner--cards">
          {cards.map((card) => (
            <Card
              key={card.title}
              {...card}
            />
          ))}
        </div>
      </div>
      <div className="mkt-container">
        <div className="mkt-container__inner">
          <div className="mkt-quote">
            <div className="mkt-quote__icon">
              <img className="mkt-quote__img" src={`../src/images/quote-icon${theme !== 'web' ? `-${theme}` : ''}.png`} alt="Quote Icon" />
            </div>
            <div className="mkt-quote__copy">
              {quote.content}
            </div>
          </div>
          <div className="mkt-quote__name">
            <img className="mkt-quote__img" src={`../src/images/speech-point${theme !== 'web' ? `-${theme}` : ''}.png`} alt="Speech Point" />
            {' '}
            <b>{quote.name}</b>
            {' '}
            {quote.company}
          </div>
        </div>
      </div>
      <div className="mkt-container">
        <div className="mkt-container__inner">
          <div className="mkt__arrow mkt__arrow--left prev slick-prev"><i className="fas fa-angle-left" /></div>
          <div className="mkt-brands">
            {brands.map((brand) => (
              <div key={brand}>
                <img className="mkt-brands__img" src={brand} alt="brand" />
              </div>
            ))}
          </div>
          <div className="mkt__arrow mkt__arrow--right next slick-next"><i className="fas fa-angle-right" /></div>
        </div>
      </div>
      <div className="mkt-container">
        <div className="mkt-container__inner">
          {features.map((feature) => (
            <Feature
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </div>
      <div className="mkt-featured">
        <svg className="mkt-featured__svg mkt-featured__svg--top" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,-1 100,-1 100,32.65 0,100" />
        </svg>
        <svg className="mkt-featured__svg mkt-featured__svg--bottom" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="0,67.35 100,0 100,101 0,101" />
        </svg>
        <div className="mkt-featured__bg" />
      </div>
      <div className="mkt-container">
        <div className="mkt-title mkt-title--large">How it Works</div>
        <div className="mkt-container__inner mkt-container__inner--cards mkt-how">
          {steps.map((step, index) => (
            <Step
              key={step.icon}
              {...step}
              index={index}
              showArrow={index + 1 < steps.length}
            />
          ))}
        </div>
      </div>
      <div className="mkt-container">
        <div className="mkt-title mkt-title--faq">Frequently Asked Questions</div>
        <div className="mkt-container__inner mkt-container__inner--faq mkt-faq">
          {faq.map((questionAnswer) => (
            <FAQ
              key={questionAnswer.title}
              {...questionAnswer}
            />
          ))}
        </div>
      </div>
      <div className="mkt-container">
        <div className="mkt-title mkt-title--large">A Little Bit About Us</div>
        <div className="mkt-container__inner mkt-about">
          <div className="mkt-copy">
            {about.map((aboutSection, index) => (
              <>
                {aboutSection}
                {index + 1 < about.length && (
                  [<br />, <br />]
                )}
              </>
            ))}
          </div>
        </div>
      </div>
      <div className="mkt-footer-container">
        <div className="mkt-footer">
          <svg className="mkt-footer__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon points="0,-1 100,-1 100,31.6 0,100" />
          </svg>
          <div className="mkt-footer__bg" />
        </div>
        <div id="mkt-form" className="mkt-container">
          <div className="mkt-container__inner">
            <div className="mkt-form">
              <Form formPostUrl="http://www.google.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
