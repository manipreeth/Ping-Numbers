import "./styles.css";
import Navbar from './components/navigationBar/navbar'
import PathConfiguration from './components/navigationBar/pathConfiguration'

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <PathConfiguration/>
    </div>
  );
}
