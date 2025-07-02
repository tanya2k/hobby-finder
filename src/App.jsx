// App.jsx
import { useState } from 'react';
import './App.css';
import prompts from './prompts.json';
import { FiFilter } from 'react-icons/fi';

function App() {
  const [idea, setIdea] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedEnergy, setSelectedEnergy] = useState('');
  const [selectedChaos, setSelectedChaos] = useState(5);

  function generateIdea() {
    const filtered = prompts.filter(p => {
      return (
        (!selectedCategory || p.category === selectedCategory) &&
        (!selectedEnergy || p.energy === selectedEnergy) &&
        p.chaos <= selectedChaos
      );
    });
    const pool = filtered.length > 0 ? filtered : prompts;
    const randomPrompt = pool[Math.floor(Math.random() * pool.length)];
    setIdea(randomPrompt);
    setFilterOpen(false);
  }

  return (
    <>
      <div className="app">
        <h1>Lore Ideas</h1>
        <div className="button-bar">
          <button onClick={generateIdea}>Generate</button>
          <button className="filter-button" onClick={() => setFilterOpen(true)}>
            <FiFilter size={20} />
          </button>
        </div>

        {idea && (
          <div className="idea-card">
            <h2>{idea.text}</h2>
            <div className="tags">
              <span className="tag">📁 {idea.category}</span>
              <span className="tag">⚡ {idea.energy}</span>
              <span className="tag">🔥 Chaos: {idea.chaos}</span>
            </div>
          </div>
        )}

        {filterOpen && (
          <div className="filter-overlay">
            <div className="filter-panel">
              <h2>Filter Prompts</h2>
              <label>
                📁 Category:
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                  <option value="">Any</option>
                  <option value="silly">Silly</option>
                  <option value="reflective">Reflective</option>
                  <option value="creative">Creative</option>
                  <option value="social">Social</option>
                  <option value="random">Random</option>
                </select>
              </label>
              <label>
                ⚡ Energy:
                <select value={selectedEnergy} onChange={e => setSelectedEnergy(e.target.value)}>
                  <option value="">Any</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </label>
              <label>
                🔥 Max Chaos: {selectedChaos}
                <input type="range" min="1" max="5" value={selectedChaos} onChange={e => setSelectedChaos(parseInt(e.target.value))} />
              </label>
              <button onClick={generateIdea} className="apply-button">Apply Filters</button>
              <button onClick={() => setFilterOpen(false)} className="close-button">Close</button>
            </div>
          </div>
        )}
      </div>
      <footer>Lore Ideas by Tanya Santhosh</footer>
    </>
  );
}

export default App;
