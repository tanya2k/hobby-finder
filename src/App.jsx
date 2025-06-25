import { useState } from 'react';
import './App.css';
import prompts from './prompts.json';

function App() {
  const [idea, setIdea] = useState(""); 
 
  function generateIdea() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    setIdea(randomPrompt);
  }

  return (
  <>
    <div className="app">
      <h1>Lore Ideas</h1>
      <button onClick={generateIdea}>Generate</button>
      <p>{idea}</p>
    </div>
    <footer>Lore Ideas by Tanya Santhosh</footer>
  </>
);

}

export default App;
