import React from 'react';

const NewsletterForm = () => {
  return (
    <div class="container-fluid newsletter-form">
      <div class="container">
        <div class="row">
          <div class="call-to-action">
            <p>Subscribe to our newsletter</p>
          </div>
        </div>
        <div class="row">
          <div class="subscribe-form-wrapper">
            <div class="subscribe-form">
              <div class="subscribe-field">
                <input type="text" placeholder="Email address" />
              </div>
              <div class="subscribe-submit">
                <button class="btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsletterForm;
