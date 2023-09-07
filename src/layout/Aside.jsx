import React, { useState } from "react";
import "../Style.css";
function Aside() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    e.preventDefault();

    const { name, email, message } = formData;

    console.log("Form Data:", formData);

    try {
      const response = await fetch("http://localhost:3000/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",},
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Message sent successfully!");
      } else {
        console.error("Error sending message.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <aside>
      <div className="aside-container">
        <div className="aside-top">
          <p>Nə etdiyimizi bilmək istəyirsiniz?</p>
          <h2>Yeniliklərdən xəbərdar olmaq üçün qeydiyyatdan keçin</h2>
        </div>
        <form onSubmit={submitHandler}>
          <div className="aside-input">
            <input
              type="text"
              placeholder="Ad, Soyad*"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email*"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="aside-input-col">
            <input
              type="text"
              placeholder="Mesaj*"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">
              Göndər
            </button>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default Aside;
