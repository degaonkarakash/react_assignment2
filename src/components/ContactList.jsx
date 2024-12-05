import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, onEditContact, onDeleteContact }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
          onEdit={onEditContact}
          onDelete={onDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
