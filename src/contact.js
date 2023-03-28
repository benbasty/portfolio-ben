import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../src/contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';

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
            {/* <h5>Get in Touch</h5> */}
            <h1>Contact Me</h1>
            <div className="divider"></div>
            <div className="container contact__container">
                {/* <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>benbasty@yahoo.fr</h5>
                        <a href="mailto:benbasty@yahoo.fr">Send me a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className="contact__option-icon"/>
                        <h4>Messenger</h4>
                        <h5>benbasty</h5>
                        <a href="https://m.me/benbasty">Let's talk</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>+861370000000000</h5>
                        <a href="https://api.whatsapp.com/send?phone+13728095491">Let's talk</a>
                    </article>
                </div> */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Enter Your Name" required/>
                    <input type="email" name="email" placeholder="Enter Your Email" required/>
                    {/* <input type="text" name="subject" placeholder="Subject" required/> */}
                    <textarea name="message" rows='10' placeholder="Enter Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary submit">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;