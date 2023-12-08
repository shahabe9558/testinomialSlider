
import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Testinomial from "./Testinomial";
const Content = (props) =>{

    let currentIndex = props.currentIndex;
    let setCurrentIndex = props.setCurrentIndex;
    let reviews = props.reviews;

    function leftHandler()
    {
      if(currentIndex <= 0)
      {
        setCurrentIndex(reviews.length-1);
      }
      else  
      {
        setCurrentIndex(currentIndex - 1);
      }
    
    }
    function rightHandler()
    {
      if(currentIndex == reviews.length-1)
      {
        setCurrentIndex(0);
      }else
      {
        setCurrentIndex(currentIndex + 1);
      }
    }
    function surriseHandler()
    {
      let randomIndex = Math.floor(Math.random() * reviews.length)
      setCurrentIndex(randomIndex);
    }
    return(
        <div className="w-[50%] h-[60%] flex-col border bg-white p-4 rounded-md shadow-md relative ">
            <Testinomial reviews={reviews[currentIndex]} />
            {/* button section  */}
            <div>
              <button onClick={leftHandler}>
                <FaChevronLeft/>
              </button>
              <button onClick={rightHandler}>
                <FaChevronRight/>
              </button>
              <button onClick={surriseHandler}>
                Suprise Me
              </button>
            </div>
        </div>
    )
};
export default Content;