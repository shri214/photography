import React, { useState } from "react";

export const Couple = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    significantOtherName: "",
    phone: "",
    email: "",
    eventDate: "",
    eventLocations: "",
    videographyBudget: "",
    instagramUsername: "",
    eventPlannerPhotographer: "",
    howDidYouHearAboutUs: "",
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
        <label>
          First Name *
          <input
            type="text"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Last Name *
          <input
            type="text"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Significant Other's Name *
          <input
            type="text"
            placeholder="Enter there name here"
            name="significantOtherName"
            value={formData.significantOtherName}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Phone *
          <input
            type="tel"
            placeholder="Enter your phone number here"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Email *
          <input
            type="email"
            placeholder="Enter your email address here"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Event Date *
          <input
            type="date"
            placeholder="choose date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
          Event Location/s *
          <input
          type="text"
            name="eventLocations"
            placeholder="enter your location's here"
            value={formData.eventLocations}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
         what is your Planned Videography Investment *
          <input
            type="text"
            placeholder="enter here your video graphy budget here"
            name="videographyBudget"
            value={formData.videographyBudget}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div className="group">
        <label>
        LET'S GET SOCIAL!
          <input
            type="text"
            placeholder="what is your instagram username"
            name="instagramUsername"
            value={formData.instagramUsername}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="group">
        <label>
        DO YOU HAVE AN EVENT PLANNER AND PHOTOGRAPHER? IF SO, WHO?
          <input
            type="text"
            placeholder="enter your event planer and photographer's name here"
            name="eventPlannerPhotographer"
            value={formData.eventPlannerPhotographer}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className="group">
        <label>
          How did you hear about us?
          <select
            name="howDidYouHearAboutUs"
            value={formData.howDidYouHearAboutUs}
            onChange={handleChange}
            required
          >
            <option value="">choose your option</option>
            <option value="Word of mouth">Word of mouth</option>
            <option value="Social media">Social media</option>
            <option value="Internet search">Internet search</option>
            <option value="Other">Other</option>
          </select>
        </label>
      </div>
      <button type="submit" className="formBtn">Submit</button>
    </form>
  );
};
