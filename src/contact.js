import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../src/contact.css';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7xvrcl6', 'template_80hr88b', form.current, 'JtxRYN4ytHDFz_jE_')
          .then((result) => {
              console.log(result.text);
              console.log("message sent")
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="contact">
            <h1>Contact Me</h1>
            <div className="divider"></div>
            <div className="container contact__container">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    <textarea name="message" rows='10' placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;