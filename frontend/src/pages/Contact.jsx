import React from "react";
import "./styles/Contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <form name="contact" method="post">
        <h1 className="contact-title">Me contacter</h1>
        <label htmlFor="name">
          Nom - Société *
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Champ obligatoire"
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Champ obligatoire"
          />
        </label>

        <label htmlFor="objet">
          Objet *
          <input
            id="objet"
            type="text"
            name="objet"
            placeholder="Champ obligatoire"
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea id="message" name="message" placeholder="Dis-nous tout" />
        </label>

        <button className="contactButton" type="submit" value="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
