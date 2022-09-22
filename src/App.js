import { useState } from 'react';
import './App.css';
// React-router-dom
import { HashRouter as Router, Route,  Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';



function App() {

  // for style

  const [myStyle, setMyStyle] = useState({
    backgroundColor: 'white',
    color: 'black'
  });

  const [textNav, setTextNav] = useState('Enable Dark mode');
  // for mode
  const [mode, setMode] = useState('light');

  // for alerts
  const [alert, setAlert] = useState(null);

  const enableMode = () => {
    if (mode === 'light') {
      setMode('dark');
      setMyStyle({
        backgroundColor: '#242124',
        color: 'white',
      });
      setTextNav('Enable Light Mode');
      document.body.style.backgroundColor = '#242124';
      document.title = "Texter-Dark Mode";
      setAlert("enabled Dark mode");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
    else {
      setMode('light');
      setMyStyle({
        backgroundColor: 'white',
        color: 'black'
      });
      setTextNav('Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      document.title = "Texter-Light Mode";
      setAlert("enabled Light mode");
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };
  return (
    < >
      <Router>
        <Navbar title="Texter" mode={mode} enableMode={enableMode} btnMode={textNav} />
        <Alert alert={alert} />

        <Routes>
          <Route
            path="/about_us"
            element={
              <div className='container'><About mode={mode}/></div>
            } />
          <Route
            path="/"
            element={<TextForm Heading="ENTER YOUR TEXT BELOW TO ANALYIS" myStyle={myStyle} />} />
        </Routes>
      </Router>
    </>
  );

}


export default App;
