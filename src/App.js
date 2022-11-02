import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [quote, setQuote] = useState('');
    const [render, setRender] = useState(true);

    useEffect(() => {
        const getStuff = async () => {
            const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
            const json = await response.json();
            setQuote(json);
        }
        
        getStuff();
    }, [render]);

    return (
      <div className='container'>
        <p className='joke'>{quote.setup}</p>
        <p className='joke'>{quote.punchline}</p>
        <button className='btn' onClick={() => {setRender((render)? false: true)}}>New Joke</button>
      </div>
    );
}

export default App;
