import { useState } from "react";

const AddHotelForm = () => {

  const categories = [
    "Budget",
    "Mid-Range",
    "Luxury",
    "Boutique",
    "Resort",
    "Other",
  ];
  const priceRanges = ["$$ (11-30)", "$$$ (31-60)", "$$$$ (61+)", "Other"];

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    location: "",
    rating: 0,
    website: "",
    phoneNumber: "",
    checkInTime: "",
    checkOutTime: "",
    amenities: "",
    priceRange: "",
    reservationsNeeded: false,
    isParkingAvailable: false,
    isWifiAvailable: false,
    isPoolAvailable: false,
    isSpaAvailable: false,
    isRestaurantAvailable: false,
    photos: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/hotels`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Server Error Details:", errorDetails);
        throw new Error("Failed to add hotel");
      }
      const data = await response.json();
      console.log("Added Hotel", data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Add New Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Category:</label>
        <br />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label>Location:</label>
        <br />
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Rating (0-5):</label>
        <br />
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          min="0"
          max="5"
          required
        />
        <br />
        <br />

        <label>Website:</label>
        <br />
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Phone Number:</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Check-in Time:</label>
        <br />
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Check-out Time:</label>
        <br />
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label>Amenities:</label>
        <br />
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />
        <br />
        <br />

        <label>Price Range:</label>
        <br />
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
        >
          <option value="">Select Price Range</option>
          {priceRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />
          Reservations Needed
        </label>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />
          Parking Available
        </label>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />
          Wi-Fi Available
        </label>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />
          Pool Available
        </label>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />
          Spa Available
        </label>
        <br />
        <br />

        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />
          Restaurant Available
        </label>
        <br />
        <br />

        <label>Photos (URLs):</label>
        <br />
        <input
          type="text"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />
        <br />
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelForm;
