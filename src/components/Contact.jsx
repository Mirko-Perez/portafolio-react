import React from "react";

export const Contact = () => {
  return (
    <div className="contact-content">
      <div className="row center">
        <form autoComplete="off" className="col s12 form-contact">
          <div className="row">
            <div className="input-field col s12">
              <input id="subject" type="text" className="validate" />
              <label for="subject">Subject</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label for="email">Email</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
              ></textarea>
              <label for="textarea1">Message</label>
            </div>
          </div>

          <div className="input-field col s12">
            <button className="btn-large dark btn-form waves-effect waves-light ">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
