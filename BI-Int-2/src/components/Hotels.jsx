import useFetch from "../useFetch";

const Hotels = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/hotels`
  );

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>Error loading hotels.</p>}

      {data &&
        data.map((hotel) => (
          <li key={hotel._id}>
            {hotel.name}
          </li>
        ))}
    </div>
  );
};

export default Hotels;