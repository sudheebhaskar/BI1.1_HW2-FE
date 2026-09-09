import useFetch from "../useFetch"

const HotelByName = ({ name }) => {
  const { data, loading, error } = useFetch(
    `https://be-4-4-hw-2-beta.vercel.app/hotels/${name}`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}

      {data && data.length > 0 && (
        <div>
          <h2>
            <strong>{data[0].name}</strong>
          </h2>

          <p>
            <strong>Location:</strong> {data[0].location}
          </p>

          <p>
            <strong>Rating:</strong> {data[0].rating}
          </p>

          <p>
            <strong>Price Range:</strong> {data[0].priceRange}
          </p>
        </div>
      )}
    </div>
  );
};

export default HotelByName;