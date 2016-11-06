import React from 'react';
import AnchorTarget from './AnchorTarget';

const Gifts = () => (
  <section>
    <img className="flower" src="/flower-purple.png" alt="Purple flower" />
    <AnchorTarget id="gifts" />
    <h1>Gifts</h1>
    <p style={{ height: 500 }}>
      As you are all travelling so far to be with us on our special day, blah blah blah.
    </p>
  </section>
);

export default Gifts;
