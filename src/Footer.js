import React from "react";
import "./App.css";



function Footer(footer) {
  const ContactDetails = [
    "Team Alpha Demo",
    "teamalpha@cyf.com", 
  ];
  const [Name, Email] = ContactDetails;
  
  return (
    <div className="footer">
      <p>Try to make a footer in red background</p>
      <p>Hello team Alpha</p>

      <ul className="footer">
        <li>{Name}</li>
        <li>{Email}</li>
      </ul>

    </div>
  );
}

export default Footer
