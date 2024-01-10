import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import "./ContactForm.css"; // Asegúrate de importar tu archivo de estilos


export const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nb7lld9', 'template_oj6owi4', form.current, 'PQr6V4jGvpZe1eusD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        customClass: {
          popup: 'colored-toast'
        }
      }).fire({
        icon: 'success',
        title: 'Message sent successfully'
      })

  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label htmlFor="name" className="form-label"></label>
      <input type="text" id="name" className="form-input" placeholder="Name" name="user_name"/>

      <label htmlFor="email" className="form-label"></label>
      <input type="email" id="email" className="form-input" placeholder="Email" name="user_email"/>

      <label htmlFor="message" className="form-label"></label>
      <textarea id="message" rows="4" className="form-input" placeholder="Comment" name="message"></textarea>

      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
};
