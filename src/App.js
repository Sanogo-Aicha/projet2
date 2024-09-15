import logo from './logo.svg';
import './App.css';
import { NameProduct } from './Name';
import { description_product } from './description';
import { prix_product } from './Price';
import { image_product } from './image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function App() {
  return (
    <div className="App">
    <Card style={{ width: '18rem' }}>
      <Card.Img src= ""/>
      <Card.Body>
        <Card.Title><NameProduct/></Card.Title>
        <Card.Title><prix_product/></Card.Title>
        <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.  
                 
                 </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>


    </div>
  );
}

export default App;
