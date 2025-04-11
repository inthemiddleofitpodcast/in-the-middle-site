import './App.css';

function App() {
  return (
    <div className="App" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <header>
        <h1>In the Middle of It</h1>
        <p style={{ fontStyle: 'italic', color: '#666' }}>
          Honest conversations for people who live between the aisles.
        </p>
      </header>

      <section style={{ maxWidth: '700px', margin: '2rem auto', fontSize: '1.1rem' }}>
        <p><strong>Hosted by JJ Harris</strong></p>
        <p>
          This podcast explores the space between progress and tradition, identity and memory, love and logic.
          With calm, curiosity, and respect, each episode dives into the conversations most people are too afraid—or too loud—to have.
        </p>
        <p>
          If you’ve ever thought, “I’m not extreme, but I don’t feel seen,” this space is for you.
        </p>
      </section>

      <div style={{ marginTop: '2rem' }}>
        <a href="https://www.buzzsprout.com" target="_blank" rel="noreferrer" style={linkStyle}>🎧 Listen on Buzzsprout</a>
        <a href="mailto:hello@inthemiddleofitpodcast.com" style={linkStyle}>📬 Contact</a>
      </div>

      <footer style={{ marginTop: '3rem', fontSize: '0.9rem', color: '#999' }}>
        <p>&copy; 2025 In the Middle of It • JJ Harris</p>
      </footer>
    </div>
  );
}

const linkStyle = {
  display: 'inline-block',
  margin: '1rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#a87d3a',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px'
};

export default App;
