
import './App.css';
import Testinomial from './components/Testinomial';
import reviews from './data'
function App() {
  return (
    <div className="App">
      <h1>Our Testinomial</h1>
      <div></div>
      <Testinomial reviews= {reviews} />
    </div>
  );
}
export default App;
