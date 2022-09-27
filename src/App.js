import React from 'react';

// import styles from './App.module.scss';
import Card from './components/ProductCard/Card/Card';
import NavBar from './components/UI/NavBar/NavBar';

import testImage1 from './images/jerry.jpg';
import testImage2 from './images/dog.jpg';
import testImage3 from './images/brainFuck.jpg';

const product = [
  {
    id: "36732ryugrfgiyuyr7",
    title: "Jerry the Mouse 🐭",
    price: "$1.99",
    description: "He likes cheese 🧀 😋",
    imageUrl: testImage1
  },
  {
    id: "yurr63541hfc",
    title: "Doggee 🐶",
    price: "$100.99",
    description: "You wanna have a cute 🐶. woof woof!",
    imageUrl: testImage2
  },
  {
    id: "75ghjvyt6536gcg",
    title: "Brain Fu*k 🧠",
    price: "$ more than just your 🧠 will f**k",
    description: "🧠 💥",
    imageUrl: testImage3
  }
]

const App = () => {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section>
        <Card products={product} />
      </section>
    </div>
  );
}

export default App;
