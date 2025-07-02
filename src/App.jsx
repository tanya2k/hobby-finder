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
      {idea && (
    <div className="idea-card">
      <h2>{idea.text}</h2>
      <p>Category: {idea.category}</p>
      <p>Energy: {idea.energy}</p>
      <p>Chaos: {idea.chaos}</p>
    </div>
  )}

    </div>
    <footer>Lore Ideas by Tanya Santhosh</footer>
  </>
);

}

export default App;
