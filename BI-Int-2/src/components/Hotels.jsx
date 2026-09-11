import { useState } from "react";
import useFetch from "../useFetch";


const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState(" ");  
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/hotels`
  );


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
  
      const data = await response.json();
  
      if (data) {
        setSuccessMessage("Hotel deleted successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      {loading && <p>Loading...</p>}
      {data?.error && <p>{data?.error}</p>}
      <ul>
        {data?.map((hotel) => (
            <li key={hotel._id}>{hotel.name}{" "}
            <button onClick={() => {
              handleDelete(hotel._id)
            }}>Delete</button>
            </li>

      ))}
      </ul>
      <p>{successMessage}</p>
    </div>
  );
 };

export default Hotels;