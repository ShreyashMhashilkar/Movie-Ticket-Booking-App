import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BookTicket from './components/BookTicket';
import Payment from './components/Payment';
import { MovieContextProvider } from './context/BookingContext';
import  {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
    <MovieContextProvider>    
    <Router>
    <Navbar/>
    <Routes>
    <Route path='' element={<Home/>}></Route>
    <Route path="/book-ticket" element = {<BookTicket/>}></Route>
    <Route path='/payment' element={<Payment/>}></Route>
    </Routes>
    </Router>
    </MovieContextProvider>
    </>
  );
}

export default App;
