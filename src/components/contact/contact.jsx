import React, { useState, useRef } from "react";
import "./contact.css";
import { validateForm } from "./validations";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name_user: "",
    email_user: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name_user: "",
    email_user: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const { formIsValid, errors } = validateForm(formData);

  console.log("Form valid:", formIsValid);
  console.log("Errors:", errors);

  setErrors(errors);

  if (formIsValid) {
    console.log("✅ Calling sendEmail");
    sendEmail();
  } else {
    console.log("❌ Form blocked");
  }
};

const sendEmail = async () => {
  console.log("🚀 Sending request...");

  try {
    const response = await fetch("https://contact-backend-hloc.onrender.com/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    console.log("✅ Response received:", response);

    const data = await response.json();
    console.log("📦 Data:", data);

    if (response.ok) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }
  } catch (error) {
    console.error("❌ Fetch error:", error);
    alert("Server error");
  }
};

  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Contact to me</h2>
      <form ref={form} onSubmit={handleSubmit} className="form">
        <div className={`input-container ${darkMode ? 'input-container__dark' : ''}`}>
          <input
            type="text"
            name="name_user"
            className={`text-input ${darkMode ? 'text-input__dark' : ''}`}
            value={formData.name_user}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          {errors.name_user && <span className="error">{errors.name_user}</span>}
        </div>
        <div className={`input-container ${darkMode ? 'input-container__dark' : ''}`}>
          <input
            type="email"
            name="email_user"
            className={`text-input ${darkMode ? 'text-input__dark' : ''}`}
            value={formData.email_user}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          {errors.email_user && <span className="error">{errors.email_user}</span>}
        </div>
        <div className={`input-container ${darkMode ? 'input-container__dark' : ''}`}>
          <input
            type="text"
            name="subject"
            className={`text-input ${darkMode ? 'text-input__dark' : ''}`}
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className={`input-container ${darkMode ? 'input-container__dark' : ''}`}>
          <textarea
            name="message"
            className={`text-input ${darkMode ? 'text-input__dark' : ''}`}
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button className="button-submit" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
