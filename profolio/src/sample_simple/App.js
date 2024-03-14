import './App.css';

const Welcome = () => {
  return <p>Welcome!</p>
}

// JSX = JavaScript XML
function App() {
  const greeting = 'Hello, React!';

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <Welcome />
    </div>
  );
}

export default App;
