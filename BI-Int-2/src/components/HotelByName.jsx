import useFetch from "../useFetch";

const HotelByName = ({ name }) => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/hotels/${name}`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>Error loading hotel</p>}

      {data && (
        <div>
          <h2>
            <strong>{data.name}</strong>
          </h2>

          <p>
            <strong>Location:</strong> {data.location}
          </p>

          <p>
            <strong>Rating:</strong> {data.rating}
          </p>

          <p>
            <strong>Price Range:</strong> {data.priceRange}
          </p>
        </div>
      )}
    </div>
  );
};

export default HotelByName;