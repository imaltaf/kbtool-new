import './App.css';

import InputTransaction from './components/InputTransaction';
import CopyButton from './CopyButton/CopyButtons';
import CompanySearchEngine from './Search/CompanySearchEngine';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <InputTransaction />
      <CopyButton />
      <CompanySearchEngine />
      <Footer />
     
    </div>
  );
}

export default App;
