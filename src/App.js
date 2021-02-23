import logo from './logo.svg';
import './App.css';
import reactDom from 'react-dom';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['shakhawat', 'anwer', 'alomgir', 'shakib', 'salman shah', 'jashim', 'rajjak', 'alamgir', 'shuvo', 'bappi'];
  const profession = ['govt service', 'acting', 'maramari', 'emotions', 'cheka khaowa']
  const products = [
    { name: 'PhotoShop', price: '$89' },
    { name: 'Illustrator', price: '$88' },
    { name: 'Adobe reader', price: '$75' },
    { name: 'PDF reader', price: '$25' },
    { name: 'Premier element', price: '$305' }
  ]

  // const productNames= products.map(product => product.name);
  // console.log(productNames);

  //  const nayokNames = nayoks.map( nayok=>nayok);
  //  console.log(nayokNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React person</p>

   <Counter></Counter>
   <Users></Users>

        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }



          {/* <li>{nayoks[0]}</li>
  <li>{nayoks[1]}</li>
  <li>{nayoks[2]}</li>
  <li>{nayoks[3]}</li>
  <li>{nayoks[4]}</li> */}

        </ul>
{
products.map(product => <Product product ={product}></Product>)
}


        {/* <Product product={products[0]}></Product>
        <Product product={products[1]}></Product>
        <Product product={products[2]}></Product>
        <Product product={products[3]}></Product> */}

{

}
        <Person name={nayoks[0]} job={profession[0]}></Person>
        <Person name={nayoks[1]} job={profession[1]}></Person>
        <Person name={nayoks[2]} job={profession[2]}></Person>
        <Person name={nayoks[3]} job={profession[3]}></Person>
        <Person name={nayoks[4]} job={profession[4]}></Person>
        {/* <Person nayok="shakib khan" nayika="bubli"></Person>
<Person nayok ="salman shah" nayika = "sabnoor"></Person>
<Person nayok = "elias kanchon" nayika = "rojina"></Person>
<Person nayok = "ananta jalil" nayika = "borsha"></Person>
<Person nayok = "alamgir" nayika = "sabana"></Person>  */}
      </header>
    </div>
  );
}
// function Person (props){
//   const personStyle ={
//     border: '5px solid magenta',
//     margin: '20px'
//   }
//   return (
//   <div style = {personStyle}>
//   <h1>{props.nayok}</h1>
//   <h3>Hero of {props.nayika} </h3>
//   </div>)
// }

function Counter(){
const [count, setCount] = useState(10);
const handleIncrease= () => {
  // const newCount = count +1;
  // setCount(newCount);
  setCount(count +1)
};
  return(
    <div>
      <h1>count:{count}</h1>
      {/* <button onClick= {handleIncrease}>Increase</button> */}
      <button onClick={ () =>setCount(count+1)}>Increase</button>
      <button onClick={ () =>setCount(count-1)}>Decrease</button>
    </div>
  )
}
function Users (){
const [users, setUsers] = useState([]);
useEffect(() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res =>res.json())
  .then(data =>setUsers(data));
},[])
  return(
    <div>
      <h3>Dynamic Users :{users.length}</h3>
    <ul>
      {
        users.map(user =><li>Name:{user.name},  Email: {user.email}, Phone Number: {user.phone}</li>)
      }
    </ul>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '5px solid yellow',
    backgroundColor: 'magenta',
    margin: '15px',
    width: '500px'
  }
  return (
    <div style={personStyle}>
      <h1>My Name is {props.name}</h1>
      <h3>My Profession is {props.job}</h3>
    </div>)
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '10px',
    backgroundColor: 'lightgray',
    color: 'magenta',
    width: '300px',
    height: '300px',
    float: 'left',
    margin: '10px'
  }
  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h2>{name}</h2>
      <h1>{price}</h1>
      <button>Buy Now</button>
    </div>

  )
}

export default App;
