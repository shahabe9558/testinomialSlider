
import { useState } from 'react';
import './App.css';
import Testinomial from './components/Testinomial';
import reviews from './data'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

function App() {
 
  let [currentIndex, setCurrentIndex] = useState(0);

  function leftHandler()
  {
    if(currentIndex < 0)
    {
      setCurrentIndex(0);
    }
    else
    {
      setCurrentIndex(currentIndex - 1);
    }
  
  }
  function rightHandler()
  {
    if(currentIndex > reviews.length -1)
    {
      setCurrentIndex(0);
    }else
    {
      setCurrentIndex(currentIndex + 1);
    }
  }
  return (
    <div className="App">
      <h1>Our Testinomial</h1>
      <div></div>
      <Testinomial reviews= {reviews[currentIndex]} />
      {/* button section  */}
      <div>
        <button onClick={leftHandler}>
          <FaChevronLeft/>
        </button>
        <button onClick={rightHandler}>
          <FaChevronRight/>
        </button>
        <button>
          Suprise Me
        </button>
      </div>
    </div>
  );
}
export default App;
