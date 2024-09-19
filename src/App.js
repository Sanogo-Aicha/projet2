import logo from './logo.svg';
import './App.css';
import { NameProduct } from './Name';
import { description_product } from './description';
import { prix_product } from './Price';
import { image_product } from './image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import product from './product';
function App() {
  return (
    <div className="App">
    <Card className='card'>
      <Card.Img src= {product.image } />
      <Card.Body>
        <Card.Title><h1> {product.name}</h1></Card.Title>
        <Card.Title><h1>goute {product.prix}</h1></Card.Title>
        <Card.Title><h1>A base d' {product.description}</h1></Card.Title>
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
