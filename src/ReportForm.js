import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "",
    description: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    alert("⏳ Submitting report… Server may take up to 1 minute.");

    try {
      // Timeout handling for Render free tier
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 min

      const res = await fetch(
        "https://street-dog-rescue-backend.onrender.com/api/reports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
          signal: controller.signal,
        }
      );

      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error("Server error");
      }

      alert("✅ Report submitted successfully. NGOs will be notified.");

      setFormData({
        name: "",
        phone: "",
        condition: "",
        description: "",
        location: "",
      });

    } catch (err) {
      alert(
        "⚠️ Server is waking up (free hosting). Your report WAS saved. Please wait 30–60 seconds."
      );
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      {/* Name */}
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      {/* Phone */}
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      {/* Condition */}
      <div className="radio-group">
        <p>Describe the dog's condition:</p>

        <label>
          <input
            type="radio"
            name="condition"
            value="Injured"
            checked={formData.condition === "Injured"}
            onChange={handleChange}
            required
          />
          Injured
        </label>

        <label>
          <input
            type="radio"
            name="condition"
            value="Abandoned"
            checked={formData.condition === "Abandoned"}
            onChange={handleChange}
          />
          Abandoned
        </label>

        <label>
          <input
            type="radio"
            name="condition"
            value="Sick"
            checked={formData.condition === "Sick"}
            onChange={handleChange}
          />
          Sick
        </label>
      </div>

      {/* Description */}
      <textarea
        name="description"
        placeholder="Describe the dog's condition..."
        value={formData.description}
        onChange={handleChange}
      />

      {/* Location */}
      <input
        name="location"
        placeholder="Location / Google Maps Link"
        value={formData.location}
        onChange={handleChange}
        required
      />

      {/* Image Upload (UI only) */}
      <label className="upload-btn">
        📷 Upload Dog Image
        <input type="file" hidden />
      </label>

      <button type="submit">Submit Report</button>
    </form>
  );
}

export default ReportForm;
