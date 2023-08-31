"use client";
import React, { useState } from "react";
import Notification from "../Notification";

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const initialFormData = { name: "", email: "", message: "" };

  const [formData, setFormData] = useState(initialFormData);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "failure";
    message: string;
  } | null>(null);
  const [showAlert, setShowAlert] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xbjvylpo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Form submitted successfully!",
        });
        setShowAlert(true);
        setFormData(initialFormData);

        // Automatically hide the success alert after 1 minute
        setTimeout(() => {
          setShowAlert(false);
        }, 60000);
        console.log("Thank you for your submission!", response.body);
      } else {
        setSubmitStatus({
          type: "failure",
          message: "Form submission failed. Please try again.",
        });
        setShowAlert(true);

        // Automatically hide the failure alert after 1 minute
        setTimeout(() => {
          setShowAlert(false);
        }, 60000);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section id={id} className="py-20">
      <h2 className="text-3xl text-center font-semibold mb-4">Contact Me</h2>
      <div className="container mx-auto p-6 rounded-lg shadow-md max-w-lg bg-gradient-to-r from-gray-50 to-gray-200">
        <form
          onSubmit={onSubmit}
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
              value={formData.name}
              onChange={onChange}
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
              value={formData.email}
              onChange={onChange}
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
              value={formData.message}
              onChange={onChange}
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
        {showAlert && (
          <Notification
            message={submitStatus?.message || ""}
            type={submitStatus?.type || ""}
            onClose={() => setShowAlert(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Contact;
