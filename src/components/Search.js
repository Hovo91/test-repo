import { TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from '../store/searchSlice';

export const Search = () => {
  const dispatch = useDispatch();
  const value = useSelector(store => store.search.value);

  const handleChange = event => {
    dispatch(setValue(event.target.value));
  };

  return <TextField value={value} onChange={handleChange} label='Some label' />;
};
