import React, { useState } from "react";

const ContactCard = ({ contact, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState(contact);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onEdit(contact.id, form);
    setIsEditing(false);
  };

  return (
    <div className="contact-card">
      {isEditing ? (
        <>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>{contact.name}</p>
          <p>{contact.email}</p>
          <p>{contact.phone}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(contact.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default ContactCard;
