import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const form = useRef();

  const sendEmail = async (e) => {
  e.preventDefault();
  try {
    await emailjs.sendForm(
      "service_qfjppfr",
      "template_5pmn7ze",
      form.current,
      "b-jY94Bzy-C8aPLYt"
    );
    setSuccess("Message Sent Successfully");
    setName("");     
    setEmail("");
    setMessage("");
  } catch (error) {
    console.error("Send email failed:", error);
    alert(`Failed to send email: ${JSON.stringify(error)}`);
    setSuccess("Failed to send message");
  }
};



  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          rows="9"
          placeholder="Message"
          required
          className="rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        
        {/* Hidden input to set reply_to */}
        <input type="hidden" name="reply_to" value={email} />

        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
