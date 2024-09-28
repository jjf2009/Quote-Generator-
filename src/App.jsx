import './App.css';
import { Quote } from './components/Quote';
import { ButtonQuote } from './components/ButtonQuote';

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div id="quote-box" className='w-6/12 h-60 bg-black'>
        <Quote />
        <ButtonQuote />
      </div>
    </div>
  );
}

export default App;
