import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


const Testinomial = ({reviews}) => {
    return(
       <div>
            <div></div>
            <img src={reviews.image} />
            <h1> {reviews.name} </h1>
            <h2> {reviews.job} </h2>
            <div>
                <FaQuoteLeft/>
                <p> {reviews.text} </p>
                <FaQuoteRight/>
            </div>   
       </div>
    )
}
export default Testinomial;