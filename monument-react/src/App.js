import './App.css';
import Navbar from './components/Navbar';
import Landing from './pages/Landing'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <Blog /> */}

      <footer>
        Here Is Footer
      </footer>
      
    </div>
  );
}

export default App;
