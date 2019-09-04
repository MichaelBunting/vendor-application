import React from 'react';
import ReactDOM from 'react-dom';
import VendorApplication from '../src/js/index';
import './index.scss';

ReactDOM.render(
  <VendorApplication
    formPostUrl="https://localhost/testing/index"
    logo="../src/images/web-logo.png"
    theme="clark"
    cards={[
      {
        icon: '../src/images/reach-icon.png',
        title: 'Increase Your Reach',
        content: (
          <>
            Leverage world’s leading distributor of restaurant supplies
            and equipment to gain exposure to
            {' '}
            <span className="mkt-highlight">millions</span>
            {' '}
            of highly engaged visitors a month
          </>
        ),
      },
      {
        icon: '../src/images/support-icon.png',
        title: 'Customer Support',
        content: (
          <>
            Webstaurant’s
            {' '}
            <span className="mkt-highlight">24/7 support</span>
            {' '}
            allows customers to ask questions any time about your products,
            increasing loyalty and driving sales
            {' '}
          </>
        ),
      },
      {
        icon: '../src/images/shipping-icon.png',
        title: 'Nationwide Shipping',
        content: (
          <>
            Ship your products to
            {' '}
            <span className="mkt-highlight">90%</span>
            * of the US in 2 days to meet customer expectations, reduce cart
            abandonment, and keep them coming back
          </>
        ),
      },
    ]}
    quote={{
      content: (
        <>
          &quot;Lorem ipsum dolor sit amet,
          {' '}
          <span className="mkt-highlight">consectetur adipiscing</span>
          {' '}
          elit. Sed congue arcu ut dolor vehicula dictum.&quot;
        </>
      ),
      name: 'Name',
      company: 'Company',
    }}
    brands={[
      '../src/images/logo-dart.png',
      '../src/images/logo-solo.png',
      '../src/images/logo-vollrath.png',
      '../src/images/logo-libbey.png',
      '../src/images/logo-cambro.png',
      '../src/images/logo-beverageair.png',
      '../src/images/logo-scotsman.png',
      '../src/images/logo-tabco.png',
      '../src/images/logo-bfm.png',
      '../src/images/logo-ts.png',
      '../src/images/logo-continental.png',
    ]}
    features={[
      {
        img: '../src/images/feature-img.jpg',
        title: 'Feature Headline',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue arcu ut dolor vehicula dictum. Integer ut urna ultrices, finibus elit pellentesque, elementum diam. Etiam in aliquet nulla. Meanness metus ex, condimentum sit amet pretium ac, condimentum vitae. Lorem ipsum dolor sit amet.',
        link: {
          text: 'Call to Action',
          href: '#mkt-form',
        },
        alignment: 'left',
      },
      {
        img: '../src/images/feature-img.jpg',
        title: 'Feature Headline 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue arcu ut dolor vehicula dictum. Integer ut urna ultrices, finibus elit pellentesque, elementum diam. Etiam in aliquet nulla. Meanness metus ex, condimentum sit amet pretium ac, condimentum vitae. Lorem ipsum dolor sit amet.',
        link: {
          text: 'Call to Action',
          href: '#mkt-form',
        },
        alignment: 'right',
      },
    ]}
    steps={[
      {
        icon: '../src/images/reach-icon.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue arcu ut Dolor vehicula dictum.',
      },
      {
        icon: '../src/images/support-icon.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue arcu ut Dolor vehicula dictum.',
      },
      {
        icon: '../src/images/shipping-icon.png',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue arcu ut Dolor vehicula dictum.',
      },
    ]}
    faq={[
      {
        title: 'Is this an example FAQ question headline?',
        content: (
          <>
            <span className="mkt-highlight">Yes</span>
            , and this is an example FAQ question answer,
            that might also include a text link to somewhere else on the site.
          </>
        ),
      },
      {
        title: 'Is this an example of a really long FAQ question headline that goes to two lines?',
        content: (
          <>
            <span className="mkt-highlight">Yes</span>
            , and this is an example FAQ question answer,
            that might also include a text link to somewhere else on the site.
          </>
        ),
      },
      {
        title: 'Is this an example FAQ question headline foo bar?',
        content: (
          <>
            <span className="mkt-highlight">Yes</span>
            , and this is an example FAQ question answer,
            that might also include a text link to somewhere else on the site.
          </>
        ),
      },
      {
        title: 'Is this an example of a really long FAQ question headline that goes to two lines bar baz?',
        content: (
          <>
            <span className="mkt-highlight">Yes</span>
            , and this is an example FAQ question answer,
            that might also include a text link to somewhere else on the site.
          </>
        ),
      },
    ]}
    about={[
      'Based in Lancaster, PA, WebstaurantStore is the largest online restaurant supply store serving food service professionals and individual custoers worldwide. With thousands of available products and over 5.5 million orders shipped, we have everything your business needs to function at its best. Over the years we have expanded our selection of wholesale supplies and commercial equipment to include healthcare, educational, and hotel supplies.',
      'Our focus is your convenience – order online from your laptop, desktop, or smartphone 24 hours a day, 7 days a week. Our fast shipping, low prices, and outstanding customer service make WebstaurantStore the best choice to meet all of your professional and food service supply needs.',
    ]}
  />,
  document.getElementById('mount'),
);
