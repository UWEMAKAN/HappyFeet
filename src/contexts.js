import { createContext } from 'react';

let shoeId;
const setShoeId = (event) => {
  const { name } = event.target;
  const id = Number(name);
  shoeId = id;
};

let shoes = [];
const setShoes = (allShoes) => {
  shoes = allShoes;
};

let shoe = {};
const getShoe = () => {
  // eslint-disable-next-line prefer-destructuring
  shoe = shoes.filter((s) => s.id === shoeId)[0];
  return shoe;
};
const myShoes = [];
const addShoeToMyShoes = () => {
  myShoes.push(shoe);
};

// eslint-disable-next-line import/prefer-default-export
export const ShoesContext = createContext({
  shoeId,
  setShoeId,
  shoes,
  setShoes,
  getShoe,
  addShoeToMyShoes
});
