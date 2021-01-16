import '../styles/App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <>
    <div className="mainApp">
      <div className="mainAppContents">
        <Navbar />
        <Home />
      </div>
    </div>
    </>
  )  
}

export default App;
