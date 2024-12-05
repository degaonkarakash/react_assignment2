import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import "./styles.css";

const App = () => {
  const [contacts, setContacts] = useState([]);

  // Load contacts from localStorage on component mount
  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    setContacts(storedContacts);
  }, []);

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const editContact = (id, updatedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? updatedContact : contact
    );
    setContacts(updatedContacts);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <div className="app">
      <h1>Contact List</h1>
      <ContactForm onAddContact={addContact} />
      <ContactList
        contacts={contacts}
        onEditContact={editContact}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

export default App;
