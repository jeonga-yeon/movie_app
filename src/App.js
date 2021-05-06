import React from 'react';
import PropTypes from "prop-types";

const foodILike = [
  {
    id:1,
    name: "만두",
    image: "https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 5
  },
  {
    id:2,
    name: "cake",
    image: "https://images.unsplash.com/photo-1620026801439-9bbc327b29f2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 4.9
  },
  {
    id:3,
    name: "coffee",
    image: "https://images.unsplash.com/photo-1620051524370-66b4d4ad141b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80",
    rating: 4.8
  },
  {
    id:4,
    name: "마카롱",
    image: "https://images.unsplash.com/photo-1616969083845-bba6ddf12be2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    rating: 5.5
  }
];

function Food({name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>  
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image} 
          rating={dish.rating} 
        />
      ))}
    </div>
  );
}

export default App;
