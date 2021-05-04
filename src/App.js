import React from 'react';

function Food({name, picture}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>  
  )
}

const foodILike = [
  {
    name: "만두",
    image: "https://images.unsplash.com/photo-1619926096619-5956ab4dfb1b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "cake",
    image: "https://images.unsplash.com/photo-1620026801439-9bbc327b29f2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  },
  {
    name: "coffee",
    image: "https://images.unsplash.com/photo-1620051524370-66b4d4ad141b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
  },
  {
    name: "마카롱",
    image: "https://images.unsplash.com/photo-1616969083845-bba6ddf12be2?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  )
}

export default App;
