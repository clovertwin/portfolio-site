import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();
    formRef.current.contact_number.value = (Math.random() * 100000) | 0;
    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <form ref={formRef} onSubmit={handleSendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </section>
  );
}
