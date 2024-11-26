import './App.css'
import Card from './components/Card';
/*
 Component composition in React refers to combining multiple 
 components to create a more complex UI. It’s a powerful pattern 
 where components act as building blocks and are reused to achieve 
 modularity and maintainability.
*/
function App() {
  return (
    <div>
      <Card title="Card 1" footer="This is footer 1">
        <p>This is the content of Card 1.</p>
      </Card>
      <Card title="Card 2" footer="This is footer 2">
        <p>This is the content of Card 2.</p>
      </Card>
    </div>
  );
}

export default App
