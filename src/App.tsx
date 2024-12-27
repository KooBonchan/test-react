import './App.css';
import { Body } from './component/Body';
import { Header } from './component/layout/Header';
import { Footer } from './component/layout/Footer';

function App() {
  
  return (
    <div className='App'>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default App;
