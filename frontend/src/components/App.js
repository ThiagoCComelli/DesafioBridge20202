import '../styles/App.css';
import Navbar from './Navbar'
import Home from './Home'

function App() {
  return (
    <>
    <div className="mainApp">
      <img alt="" src={`${process.env.PUBLIC_URL}/images/logo.svg`}/>
      <div className="mainAppContents">
        <Navbar />
        <Home />
      </div>
    </div>
    </>
  )  
}

export default App;
