import React, { Fragment } from 'react';
// import { useForm } from 'react-hook-form';

const Contact = () => {
  return (
    <Fragment style={{ display: 'flex' }}>
      <div style={{ width: '75%', margin: 'auto' }}>
        <div className="ContactForm" style={{ marginTop: '4rem' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <div className="contactForm">
                  <form id="contact-form" noValidate>
                    {/* Row 1 of form */}
                    <div className="row formRow" style={{ marginTop: '1rem' }}>
                      <div className="col-6">
                        <input
                          type="text"
                          name="name"
                          className="form-control formInput"
                          placeholder="Name"
                        ></input>
                      </div>
                      <div className="col-6">
                        <input
                          type="email"
                          name="email"
                          className="form-control formInput"
                          placeholder="Email address"
                        ></input>
                      </div>
                    </div>
                    {/* Row 2 of form */}
                    <div className="row formRow" style={{ marginTop: '1rem' }}>
                      <div className="col">
                        <input
                          type="text"
                          name="subject"
                          className="form-control formInput"
                          placeholder="Subject"
                        ></input>
                      </div>
                    </div>
                    {/* Row 3 of form */}
                    <div className="row formRow" style={{ marginTop: '1rem' }}>
                      <div className="col">
                        <textarea
                          rows={3}
                          name="message"
                          className="form-control formInput"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      className="submit-btn"
                      type="submit"
                      style={{ marginTop: '1rem' }}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Contact;
