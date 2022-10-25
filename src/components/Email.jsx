import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./email.scss";

// npm i @emailjs/browser

const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ssbl3j",
        "template_2yu5qeu",
        form.current,
        "icnwddaTm-ishFL5F"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="contact-texte">
        <h1 className="contact-titre">Contactez-nous</h1>
        <p>
          
        </p>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Email;
