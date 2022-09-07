import { useRef, useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import AnimateInView from "./AnimateInView";

const Contact = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userMessage, setUserMessage] = useState("");
  const [buttonValue, setButtonValue] = useState("Send");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName.length > 0 && userEmail.length > 0 && userMessage.length > 0) {
      setButtonValue("Sending..");
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
            console.log(result);
            setButtonValue("Email Sent!");
            setTimeout(() => {
              setButtonValue("Send");
            }, 5000);
          },
          (error) => {
            console.log(error.text);
            setButtonValue("Error Sending");
            setTimeout(() => {
              setButtonValue("Send");
            }, 5000);
          }
        );
      setUserName("");
      setUserEmail("");
      setUserMessage("");
    } else {
      return;
    }
  };

  return (
    <AnimateInView>
      <section
        id="contact"
        className="text-lg mt-20 text-center sm:text-xl sm:mt-40 scroll-m-24"
      >
        <div className="border-b-4 border-blue-600 inline-block transition ease-in-out duration-300 dark:border-sky-500">
          <h2 className="font-manrope tracking-tighter text-slate-800 font-extrabold text-3xl sm:text-4xl dark:text-neutral-50">
            Contact
          </h2>
        </div>
        <form
          className="text-left mt-5 p-4 rounded-2xl border-2 border-blue-600 bg-gray-200 shadow-lg space-y-6 transition ease-in-out duration-300 dark:border-sky-500 dark:bg-neutral-700"
          ref={formRef}
          onSubmit={handleSendEmail}
        >
          <input type="hidden" name="contact_number" />
          <div className="sm:flex sm:space-x-4 ">
            <div className="sm:w-1/2">
              <label className="text-slate-800 dark:text-neutral-50">
                Name
              </label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                placeholder="Your name"
                className="border-2 border-blue-400 bg-white placeholder:text-neutral-400 rounded-md w-full block py-2 px-4 text-neutral-500 text-base transition ease-in-out duration-300 focus:outline-none focus:border-blue-600 dark:border-sky-500 dark:focus:border-sky-300 dark:bg-neutral-500 dark:text-neutral-50 dark:placeholder:text-neutral-50"
                type="text"
                name="user_name"
              />
            </div>
            <div className="mt-6 sm:mt-0 sm:w-1/2">
              <label className="text-slate-800 dark:text-neutral-50">
                Email
              </label>
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="email@email.com"
                className="border-2 border-blue-400 bg-white placeholder:text-neutral-400 rounded-md w-full block py-2 px-4 text-base transition ease-in-out duration-300 text-neutral-500 focus:outline-none focus:border-blue-600 dark:border-sky-500 dark:focus:border-sky-300 dark:bg-neutral-500 dark:text-neutral-50 dark:placeholder:text-neutral-50"
                type="email"
                name="user_email"
              />
            </div>
          </div>
          <div>
            <label className="text-slate-800 dark:text-neutral-50">
              Message
            </label>
            <textarea
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Leave a short message, or maybe just say hi, I'll be sure to respond!"
              rows={4}
              className="border-2 border-blue-400 bg-white placeholder:text-neutral-400 rounded-md block py-2 px-4 text-base transition ease-in-out duration-300 text-neutral-500 w-full focus:outline-none focus:border-blue-600 dark:border-sky-500 dark:focus:border-sky-300 dark:bg-neutral-500 dark:text-neutral-50 dark:placeholder:text-neutral-50"
              name="message"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="block mb-2 px-20 py-2 border-2 border-blue-600 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-700 hover:border-blue-700 transition ease-in-out duration-300 hover:cursor-pointer dark:border-sky-500 dark:focus:border-sky-300 dark:bg-sky-500 dark:text-neutral-50 dark:hover:border-sky-600 dark:hover:bg-sky-600"
              type="submit"
              value={buttonValue}
            />
          </div>
        </form>
      </section>
    </AnimateInView>
  );
};

export default Contact;
