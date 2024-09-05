import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'product 1' },
  { id: 3, name: 'product 3' },
  { id: 2, name: 'product 2' },
  { id: 4, name: 'product 4' },
  { id: 5, name: 'product 5' },
  { id: 6, name: 'product 6' },
  { id: 7, name: 'product 7' },
];

export const Product = () => {
  const params = useParams();

  console.log(products.map(product => (product.id === +params.id ? product.name : null)));

  console.log(products.filter(product => product.id === +params.id));

  const product = products.find(product => product.id === +params.id);

  return <div>{product ? product.name : 'not found'}</div>;
};
