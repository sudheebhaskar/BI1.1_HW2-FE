import "./App.css";
import Hotels from "./components/Hotels";
import HotelByName from "./components/HotelByName";

function App() {
  return (
    <>
      <h1>All Hotels</h1>

      <Hotels />

      <HotelByName name="Lake View Residency" />
    </>
  );
}

export default App;