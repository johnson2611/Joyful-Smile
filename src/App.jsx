import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FooterCom from "./components/Footer";
import Volunteer from "./pages/Volunteer";
import Service from "./pages/Service";
import Donation from "./pages/Donation";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6] overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/service" element={<Service />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
      <FooterCom/>
    </main>
  );
}

export default App;
