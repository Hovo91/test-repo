import { Search } from './components/Search';
import { Products } from './components/Products';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Search />
      <p>New</p>
      <Products />
    </Provider>
  );
}

export default App;
