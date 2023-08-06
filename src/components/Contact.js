import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      {/* Add your contact details and contact form here */}
      <p className="contact-details">
        Email:{" "}
        <a href="mailto:ansh28508@gmail.com">
          <strong>ansh28508@gmail.com</strong>
        </a>
      </p>
      <p className="contact-details">
        Phone: <strong>7033586799</strong>
      </p>
    </section>
  );
};

export default Contact;
