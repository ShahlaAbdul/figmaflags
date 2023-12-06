
import './App.css';
import { Route, Routes } from "react-router-dom"
import MainLayout from './MainLayout';
import Homepage from './Pages/Home';
import './reset.css'
import FlagCarddetail from './Pages/FlagDetailCard';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<FlagCarddetail></FlagCarddetail>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
