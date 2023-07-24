import './App.css';
import HomePage from './components/HomePage';
import { Routes, Route} from 'react-router-dom';
import MoviePage from './components/MoviePage';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        className="w-full"
        style={{ width: "600px" }}
      />
      <Routes >
          <Route path="/*" element={<HomePage/>} />
          <Route path="/felly/:imdbID/*" element={<MoviePage/>}/> 
      </Routes>
    </>
  );
}

export default App;
