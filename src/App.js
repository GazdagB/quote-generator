import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios';
import { useState, useEffect} from 'react';
import Quotes from './components/Quotes';

function App() {

  const [quote,setQuote] = useState([]); 

  const fetchData = function(){
    axios.get("https://api.quotable.io/random")
    .then(res =>setQuote([res.data]));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="App">
      {
        quote.map((e,idx)=>{
         return <Quotes key={idx} author={e.author} content={e.content} />
        })
      }
      <button onClick={fetchData} className='btn btn--newquote'>New Quote</button>
    </div>
  );
}

export default App;
