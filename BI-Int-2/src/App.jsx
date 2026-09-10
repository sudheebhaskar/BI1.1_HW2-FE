import "./App.css";
import Hotels from "./components/Hotels";
import HotelByName from "./components/HotelByName";
import AddHotelForm from "./components/AddHotelForm";

function App() {
  return (
    <>
      

      <AddHotelForm />
      <h1>All Hotels</h1>
      <Hotels />

      <HotelByName name="Lake View Residency" />
    </>
  );
}

export default App;