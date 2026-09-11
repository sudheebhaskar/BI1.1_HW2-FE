import { useEffect, useState } from "react";
import useFetch from "../useFetch";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [hotels, setHotels] = useState([]);

  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/hotels`
  );

  useEffect(() => {
    if (data) {
      setHotels(data);
    }
  }, [data]);

  const handleDelete = async (hotelId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/hotels/${hotelId}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete hotel.");
      }

      // Remove the deleted hotel from the UI
      setHotels((currentHotels) =>
        currentHotels.filter((hotel) => hotel._id !== hotelId)
      );

      // Show success message
      setSuccessMessage("Hotel deleted successfully");

      // Hide success message after 3 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {/* Success message */}
      {successMessage && <p>{successMessage}</p>}

      <h1>All Hotels</h1>

      <ul>
        {hotels.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}{" "}
            <button onClick={() => handleDelete(hotel._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;