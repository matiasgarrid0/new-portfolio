import './App.css';
import { Home } from './Components/Home/Home';
import { Experience } from './Components/Experience/Experience';
import { Projects } from './Components/Projects/Projects';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
