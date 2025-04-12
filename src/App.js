import './App.css';
import cover from './cover.png'; // Make sure to import your cover image here

function App() {
  return (
    <div className="App" style={containerStyle}>
      <img src={cover} alt="In the Middle of It podcast cover" style={coverStyle} />

      <h1 style={titleStyle}>In the Middle of It</h1>
      <p style={taglineStyle}>Honest conversations for people who live between the aisles.</p>

      <section style={sectionStyle}>
        <p><strong>Hosted by JJ Harris</strong></p>
        <p>This podcast explores the space between progress and tradition, identity and memory, love and logic. With calm, curiosity, and respect, each episode dives into the conversations most people are too afraid—or too loud—to have.</p>
        <p>If you’ve ever thought, “I’m not extreme, but I don’t feel seen,” this space is for you.</p>
      </section>

      {/* Embedded Buzzsprout Trailer Player */}
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `<iframe title="Podcast Trailer" style="border:none;width:100%;height:200px;" src="https://www.buzzsprout.com/2469544/episodes/16967296-trailer-in-the-middle-of-it.js?container_id=buzzsprout-player-16967296&player=small" frameborder="0" scrolling="no"></iframe>`
          }}
        />
      </div>
          
      <div style={buttonRow}>
        <a  href="https://linktr.ee/middleofitpod" target="_blank" rel="noreferrer" style={buttonStyle}>🎧 Listen & Connect</a>
        <a href="mailto:hello@inthemiddleofitpodcast.com" style={buttonStyle}>📬 Contact</a>
      </div>

      <footer style={footerStyle}>
        &copy; 2025 In the Middle of It • JJ Harris
      </footer>
    </div>
  );
}

const containerStyle = {
  fontFamily: 'Arial, sans-serif',
  padding: '2rem',
  textAlign: 'center',
  backgroundColor: '#f9f8f6',
  color: '#333',
};

const coverStyle = {
  maxWidth: '300px',
  width: '100%',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
  marginBottom: '2rem',
};

const titleStyle = {
  fontSize: '2.5rem',
  margin: '0.5rem 0',
};

const taglineStyle = {
  fontStyle: 'italic',
  color: '#666',
  marginBottom: '2rem',
};

const sectionStyle = {
  maxWidth: '700px',
  margin: '0 auto 2rem',
  fontSize: '1.1rem',
  lineHeight: '1.6',
};

const buttonRow = {
  marginTop: '2rem',
};

const buttonStyle = {
  display: 'inline-block',
  margin: '1rem',
  padding: '0.75rem 1.5rem',
  backgroundColor: '#a87d3a',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '6px',
  fontWeight: 'bold',
};

const footerStyle = {
  marginTop: '3rem',
  fontSize: '0.9rem',
  color: '#999',
};

export default App;
