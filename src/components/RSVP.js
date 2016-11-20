import React from 'react';
import AnchorTarget from './AnchorTarget';

const RSVP = () => (
  <section>
    <img className="flower" src="/flower-pink.png" alt="Pink flower" />
    <AnchorTarget id="rsvp" />
    <h1>RSVP</h1>
    <form action="">
      <fieldset>
        <label>
          <div>Name(s):</div>
          <input type="text" name="names" />
        </label>
      </fieldset>

      <fieldset>
        <label>Will you be joining us?</label>
        <label>
          <input type="radio" name="rsvp" value="yes" />
          {"Yes, I'll be there!"}
        </label>
        <label>
          <input type="radio" name="rsvp" value="no" />
          {"Sorry, I can't make it"}
        </label>
      </fieldset>

      <fieldset>
        <label>
          <div>Any dietary requirements?</div>
          <textarea name="diet" />
        </label>
      </fieldset>

      <fieldset>
        <input type="submit" />
      </fieldset>
    </form>
  </section>
);

export default RSVP;
