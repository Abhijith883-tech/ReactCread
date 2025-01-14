import { Route, Routes } from 'react-router-dom';
import './App.css'
import Create from './pages/Create';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Update from './components/Update';
import Tablee from './components/Tablee';

const App = () => {



  return (
    <>
      <Header />
      {/* path for Home,Create */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/tablee' element={<Tablee />} />

      </Routes>
      <Footer />
    </>
  )
}



export default App;