
import { useState } from 'react';
import './App.css';
import Nav from './Navigation/Nav';
import Products from './Products/Products'
import Recommended from './Recommended/Recommended';
import Category from './SideBar/Category';
import Sidebar from './SideBar/Sidebar';
import Card from './components/Card';

//Database
import products from '../src/db/data'


function App() {
  
  const [query,setQuery]=useState("");
  const [selectedCategory,setSelectedCategory]=useState(null);

  
  
  // ---------------- Input Filter 

  const handleInputChange = (e) =>{
    setQuery(e.target.value);
  }

  const filteredItems = products.filter( (product) =>
  product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  
  // ---------------- Radio Filter
  
  const handleChange = (e) =>{
    setSelectedCategory(e.target.value);
  }
  
  // ---------------- Buttons  Filter

  const handleClick = (e) =>{
    setSelectedCategory(e.target.value)    //setSelectedCategory is being used in both radio and button filter.
  }

  
  
  
  
  
  function filteredData(product,selected,query){

    let filteredProducts = products;

    //Filtering input items

    if(query){
      filteredProducts = filteredItems; 
    }

    //Selected Filter

    if(selected){
      filteredProducts = filteredProducts.filter(
      ({ category,color,company,newPrice,title}) =>  //Array Destructing 
      //if any matches is passed to filteredProducts/
      category === selected || 
      color === selected || 
      company === selected || 
      newPrice == selected || 
      title === selected) 
    }

    return filteredProducts.map(({img,title,star,reviews,prevPrice,newPrice}) => //It has the filtered Products list which is passed on to Card Component.
    
    //Card component displays the products taking the filteredproducts
    //Initially the filtered product is all products.
    
    
    <Card
    
    key = {Math.random()}
    img = {img}
    title = {title}
    star = {star}
    reviews = {reviews}
    newPrice = {newPrice}
    prevPrice = {prevPrice}
    
    />
    
  )
} 

  const result = filteredData(products,selectedCategory,query)
  
  return (
    <>
    
    {/* handleChange function stores the value of Selected Category */}
    <Sidebar handleChange={handleChange}/> 
    <Nav query={query} handleInputChange={handleInputChange}/>
    <Recommended handleClick={handleClick}/>
    <Products result={result}/>
   
    
    </>
  );
}

export default App;
