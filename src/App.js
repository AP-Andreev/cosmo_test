import './App.css';
import './reset.css';
import './Static/Fonts/fonts.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

//import Header from 'src/Components/Header/Header.jsx'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Content />
      <Footer />
    </div>);
}

export default App;