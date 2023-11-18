import { setFilter } from 'redux/FilterSlice';
import { getFilter } from 'redux/Selectors';
import { useSelector, useDispatch } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return [filter, onSetFilter];
};
