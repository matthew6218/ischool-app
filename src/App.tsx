
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import MobileLayout from './components/MobileLayout';
import Home from './pages/Home';
import CheckIn from './pages/CheckIn';
import TripStatus from './pages/TripStatus';
import HotelInfo from './pages/HotelInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MobileLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/check-in" element={<CheckIn />} />
          <Route path="/status" element={<TripStatus />} />
          <Route path="/info" element={<HotelInfo />} />
        </Route>
      </Routes>
      <Toaster theme="dark" position="top-center" />
    </BrowserRouter>
  );
}

export default App;
