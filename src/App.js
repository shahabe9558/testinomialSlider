
import { useState } from 'react';
import './App.css';
import Testinomial from './components/Testinomial';
import reviews from './data'
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Content from './components/Content';

function App() {
 
  let [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className=" bg-gray-200 border-2 border-black w-screen h-screen flex justify-center items-center relative">
      <div className='absolute top-14 flex-col'>
        <h1 className=' text-4xl font-bold '>Our Testinomial</h1>
        <div className="bg-blue-500 mt-2 w-36 h-1 rounded-md m-auto"></div>
      </div>
      <Content currentIndex= {currentIndex} setCurrentIndex={setCurrentIndex} reviews= {reviews} />
    </div>
  );
}
export default App;
