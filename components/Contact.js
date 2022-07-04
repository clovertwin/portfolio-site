import { useRef } from "react";
import emailjs from "@emailjs/browser";
import useSectionVisible from "../hooks/useSectionVisible";

export default function Contact() {
  const formRef = useRef();
  const contactRef = useRef();
  const isContactVisible = useSectionVisible(contactRef);

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
    <div
      ref={contactRef}
      className={isContactVisible ? "animate-slide-up" : "opacity-0"}
    >
      <section
        id="contact"
        className="text-lg mt-20 text-center sm:text-xl sm:mt-40 scroll-m-24"
      >
        <div className="border-b-4 border-blue-600 inline-block">
          <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl">
            Contact
          </h2>
        </div>
        <form
          className="text-left mt-5 p-4 rounded-2xl border-2 border-blue-600 bg-gray-200 shadow-lg space-y-6"
          ref={formRef}
          onSubmit={handleSendEmail}
        >
          <input type="hidden" name="contact_number" />
          <div className="sm:flex sm:space-x-4 ">
            <div className="sm:w-1/2">
              <label className="text-slate-800">Name</label>
              <input
                placeholder="Your name"
                className="border-2 border-blue-400 rounded-md w-full block py-2 px-4 text-neutral-500 text-base focus:outline-none focus:border-blue-600"
                type="text"
                name="user_name"
              />
            </div>
            <div className="mt-6 sm:mt-0 sm:w-1/2">
              <label className="text-slate-800">Email</label>
              <input
                placeholder="email@email.com"
                className="border-2 border-blue-400 rounded-md w-full block py-2 px-4 text-base text-neutral-500 focus:outline-none focus:border-blue-600"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div>
            <label className="text-slate-800">Message</label>
            <textarea
              placeholder="Leave a short message, or maybe just say hi, I'll be sure to respond!"
              rows="4"
              className="border-2 border-blue-400 rounded-md block py-2 px-4 text-base text-neutral-500 w-full focus:outline-none focus:border-blue-600"
              name="message"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="block mb-2 px-20 py-2 border-2 border-blue-600 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:border-blue-700 transition ease-in-out duration-300 hover:cursor-pointer"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </section>
    </div>
  );
}
