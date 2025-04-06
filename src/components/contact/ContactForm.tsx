"use client";

import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState("Ask a question");
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, reason, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log('SUCCESS!', response.status, response.text);
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setReason('Ask a question');
      setMessage('');
    } catch (err) {
      console.error('FAILED...', err);
      setStatus('Failed to send message. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="md:mx-auto mx-8 mt-8 mb-16 p-6 sm:p-14 max-w-xl border-gray-700 border-1 shadow-purple-500 shadow-lg rounded-xl">
      <form onSubmit={handleSubmit} className="">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Get In Touch</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-200 font-medium">
            Name:
          </label>
          <input
            type="text"
            id="name"
            aria-label="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-200 font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            aria-label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="reason" className="block text-gray-200 font-medium">
            Reason for Contacting:
          </label>
          <select
            id="reason"
            aria-label="Reason for Contact"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md bg-black appearance-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 cursor-pointer"
          >
            <option value="Book Appointment">Book an appointment</option>
            <option value="Ask Question">Ask a question</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="my-4">
          <label htmlFor="message" className="block text-gray-200 font-medium">
            Message:
          </label>
          <textarea
            id="message"
            aria-label="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded-md h-32"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg font-semibold transition border ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-white text-black hover:bg-gray-300"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`text-center mt-4 ${status.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
}