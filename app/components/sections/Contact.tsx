"use client";
import React, { FormEvent, useState } from "react";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl text-center font-semibold mb-4">Contact Me</h2>
      <div className="container mx-auto p-6 rounded-lg shadow-md max-w-lg bg-gradient-to-r from-gray-50 to-gray-200">
        <form
          action="#"
          method="POST"
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="block w-full px-4 py-2 rounded-lg border focus:border-gray-500"
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="block w-full px-4 py-2 rounded-lg border focus:border-gray-500"
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="block w-full px-4 py-2 rounded-lg border focus:border-gray-500"
            />
          </div>
          <div className="col-span-2 md:col-span-2">
            <button
              type="submit"
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gradient-to-r from-gray-400 to-gray-900 focus:outline-none"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
