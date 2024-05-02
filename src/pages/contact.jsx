import React from "react";

const Contact = () => {
  return (
    <div style={{ textAlign: 'center', margin: '20px' , color: 'rgb(88, 41, 41)'}}>
      <h2>Contact Details</h2>
      <p style={{ marginBottom: '10px' }}>
        Feel free to reach out to us if you have any questions or concerns. We're here to help!
      </p>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ marginBottom: '5px' }}>
          <strong>Email:</strong> hazelinesupport@gmail.com
        </li>
        <li style={{ marginBottom: '5px' }}>
          <strong>Phone:</strong> +44 2662 2238
        </li>
        <li>
          <strong>Address:</strong> 15 Kingsley Way, Tooting Bec, London, United Kingdom
        </li>
      </ul>
    </div>
  );
};

export {Contact};
