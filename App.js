import React from 'react';
import ReactDOM from 'react-dom/client';

// ChildComponent receives data from ParentComponent via props
function ChildComponent(props) {
  return (
    <div>
      <h3>Child Component</h3>
      <p>
        Data received from parent: <strong>{props.message}</strong>
      </p>
    </div>
  );
}

// ParentComponent passes data to ChildComponent via props
function ParentComponent() {
  const dataToPass = "Hello from Parent!";

  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message={dataToPass} />
    </div>
  );
}

// App component renders the ParentComponent
function App() {
  return <ParentComponent />;
}

// Render the App component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

