import './App.css';
import { Home } from './Components/Home/Home';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';

function App() {
  return (
    <div>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
