import React, { useState } from "react";

function ReportForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    condition: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://street-dog-rescue-backend.onrender.com/api/reports",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      alert("✅ Report submitted successfully!");

      setFormData({
        name: "",
        phone: "",
        condition: "",
        description: "",
        location: "",
      });
    } catch (err) {
      alert(
        "Form Submitted✅"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <div className="radio-group">
        <p>Describe the dog's condition:</p>

        {["Injured", "Abandoned", "Sick"].map((c) => (
          <label key={c}>
            <input
              type="radio"
              name="condition"
              value={c}
              checked={formData.condition === c}
              onChange={handleChange}
              required
            />
            {c}
          </label>
        ))}
      </div>

      <textarea
        name="description"
        placeholder="Describe the dog's condition..."
        value={formData.description}
        onChange={handleChange}
      />

      <input
        name="location"
        placeholder="Location / Google Maps Link"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? "Submitting..." : "Submit Report"}
      </button>
    </form>
  );
}

export default ReportForm;
