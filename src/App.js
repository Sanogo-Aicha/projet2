import logo from './logo.svg';
import './App.css';
import Card from 'react-bootstrap/Card';
import Product from './data/product';
import ImageProduct from './components/image';
import NameProduct from './components/Name';
import DescriptionProduct from './components/description';
import PriceProduit from './components/Price';
import userlist from './data/userdata';
import User from './components/user/user';
import Etat from './components/etat';
function App() {
  const {name}=userlist
  return (
    <div>
    <Card className='card'>
      <ImageProduct image={Product.image} className="image"/>
      <NameProduct name={Product.name} />
      <DescriptionProduct description={Product.description} />
      <PriceProduit prix={Product.prix}/>
    </Card>
    
    <h1>BONJOUR {name !="" ? <Etat/>:null}</h1>
    </div>
  );
}

export default App;
