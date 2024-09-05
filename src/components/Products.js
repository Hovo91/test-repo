import { useEffect } from 'react';
import { ProductItem } from './ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../store/products/actions';

export const Products = () => {
  const dispath = useDispatch();
  const value = useSelector(store => store.search.value);
  const products = useSelector(store => store.products.products);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => dispath(setProducts(json)));
  }, [dispath]);

  return products?.length ? (
    <ul>
      {products
        .filter(product => product.title.includes(value))
        .map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
    </ul>
  ) : (
    'We have not products...'
  );
};
