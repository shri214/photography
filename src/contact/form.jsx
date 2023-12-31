import React, { useState } from "react";

const Forms = ({ flag }) => {
  const [formData, setFormData] = useState({
    yourName: "",
    company: "",
    email: "",
    eventDate: "",
    eventLocation: "",
    coupleName: "",
    budget: "",
    about: "",
    ideal: "",
    shoot: "",
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
    // You can handle form submission here
    console.log(formData);
    // You might want to send this data to an API or perform other actions
  };
  return (
    <form onSubmit={handleSubmit} className="coupleForm">
      <div className="group">
        <label className="color93C3ED">
          Your Name
          <input
            type="text"
            name="yourName"
            value={formData.yourName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label className="color93C3ED">
          company
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label className="color93C3ED">
          email address
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      {flag && (
        <div className="group">
          <label className="color93C3ED">
            event date
            <input
              type="text"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      {flag && (
        <div className="group">
          <label className="color93C3ED">
            event location
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      {flag && (
        <div className="group">
          <label className="color93C3ED">
            couple's name
            <input
              type="text"
              name="coupleName"
              value={formData.coupleName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      {flag && (
        <div className="group">
          <label className="color93C3ED">
            budget for video
            <input
              type="text"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}

      {!flag && (
        <div className="group">
          <label className="color93C3ED">
            ideal shoot date
            <input
              type="text"
              name="ideal"
              value={formData.ideal}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}
      {!flag && (
        <div className="group">
          <label className="color93C3ED">
            shoot location
            <input
              type="text"
              name="shoot"
              value={formData.shoot}
              onChange={handleChange}
              required
            />
          </label>
        </div>
      )}

      <div className="group">
        <label className="color93C3ED">
          <textarea
            type="text"
            name="about"
            placeholder="Please tell us a little about your client's ideal style and coverage."
            value={formData.about}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="buttons">
        <button type="submit" className="send">
          Send.
        </button>
      </div>
    </form>
  );
};

export default Forms;
