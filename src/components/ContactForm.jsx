import React, { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) return;
    onAddContact({ ...form, id: Date.now() });
    setForm({ name: "", email: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;
