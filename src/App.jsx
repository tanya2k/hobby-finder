import { useState } from 'react';
import './App.css';

function App() {
  const [idea, setIdea] = useState(""); 

  const prompts = [ 
    "Dance in public for 10 seconds",
    "Text someone you haven't spoken to in 6 months",
    "Speak in an accent all day",
    "Try a food you've never had",
    "Do something chaotic today"
  ];

  function generateIdea() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const randomPrompt = prompts[randomIndex];
    setIdea(randomPrompt);
  }

  return (
    <div>
      <h1>Lore Ideas</h1>
      <button onClick={generateIdea}>Give me a lore idea</button>
      <p>{idea}</p> {/* 🔥 4. Show idea here */}
    </div>
  );
}

export default App;
