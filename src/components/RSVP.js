import React from 'react';
import AnchorTarget from './AnchorTarget';

// Name
// Yes/no
// Dietary reqs.

const RSVP = () => (
  <section>
    <img className="flower" src="/flower-pink.png" alt="Pink flower" />
    <AnchorTarget id="rsvp" />
    <h1>RSVP</h1>
    <form action="">
      <label>
        <span>Name:</span>
        <input type="text" name="name" />
      </label>
      <span>Will you be joining us?</span>
      <label>
        <span>{"Yes, I'll be there!"}</span>
        <input type="radio" name="rsvp" value="yes" />
      </label>
      <label>
        <span>{"Sorry, I can't make it"}</span>
        <input type="radio" name="rsvp" value="no" />
      </label>
      <label htmlFor="">
        <span>Dietary requirements:</span>
        <textarea />
      </label>
      <input type="submit" />
    </form>
  </section>
);

export default RSVP;
