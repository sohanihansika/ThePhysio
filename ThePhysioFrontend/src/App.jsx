import React from 'react';
import TableComponent from './components/table'; // Adjust the path as per your project structure

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/table" element={<TableComponent />} />
            {/* Define other routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
