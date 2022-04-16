import React from "react";
import Emailjs from "@emailjs/browser";

export const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    Emailjs.sendForm(
      "service_t2maon1",
      "template_a600ejl",
      e.target,
      "0WOW_hNJbvpUzzBxw"
    ).then((resp) => resp.status === 200 && alert("Msj Enviado"));
    // .catch((err) => console.log(err));
  };

  return (
    <div className="contact-content">
      <div className="row center">
        <form
          autoComplete="off"
          className="col s12 form-contact"
          onSubmit={sendEmail}
        >
          <div className="row">
            <div className="input-field col s12">
              <input
                name="subject"
                id="subject"
                type="text"
                className="validate"
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <input
                name="email"
                id="email"
                type="email"
                className="validate"
                required
              />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="textarea1"
                id="textarea1"
                className="materialize-textarea"
                required
              ></textarea>
              <label htmlFor="textarea1">Message</label>
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
