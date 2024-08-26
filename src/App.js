import React from 'react';
import Header from './components/Header/Header';  // Assuming Header is in this path
import Footer from './components/Footer/Footer';  // Assuming Footer is in this path
import Home from './components/Home/Home';                  // Assuming Home component is in a "pages" folder

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Home />  {/* Render the homepage content */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
