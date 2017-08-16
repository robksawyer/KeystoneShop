import React from 'react';

const Contact = (props) => {

  let {enquirySubmitted, validationErrors, formData, enquiryTypes} = props;

  return (
    <div>
      <div className="container">
        <h1>Contact Us</h1>
      </div>
      <div className="container">
        { enquirySubmitted ? (
          <h3>Thanks for getting in touch.</h3>
        ) : (
          <div className="row">
            <div className="col-sm-8 col-md-6">
              <form method="post">
                <input type="hidden" name="action" value="contact" />
                <div className={validationErrors.name ? 'form-group has-error' : 'form-group' }>
                  <label>Name</label>
                  <input type='text' name='name.full' value={formData['name.full']} className="form-control" />
                </div>
                <div className={validationErrors.email ? 'form-group has-error' : 'form-group' }>
                  <label>Email</label>
                  <input type='text' name='email' value={formData['name.email']} className="form-control" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type='text' name='phone' value={formData['name.phone']} placeHolder="(optional)" className="form-control" />
                </div>
                <div className={validationErrors.enquiryType ? 'form-group has-error' : 'form-group' }>
                  <label>What are you contacting us about?</label>
                  <select type='text' name='enquiryType' value={formData['name.email']} defaultValue={formData.enquiryType} className="form-control">
                    <option value='' key='empty'>(select one)</option>
                    {
                      enquiryTypes.map((type) =>(
                        <option key={type.value.toString()} value={type.value}>{type.label}</option>
                      ))
                    }
                  </select>
                </div>
                <div className={validationErrors.message ? 'form-group has-error' : 'form-group' }>
                  <label>Message</label>
                  <textarea type='text' name='message' value={formData['name.email']} placeHolder="Leave us a message..." rows="4" className="form-control">
                    {formData.message}
                  </textarea>
                </div>
                <div className="form-actions">
                  <button type='submit' className="btn btn-primary">Send</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contact;
