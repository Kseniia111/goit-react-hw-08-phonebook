import { setStatusFilter } from 'redux/FilterSlice';
import { selectFilter } from 'redux/Selectors';
import { useSelector, useDispatch } from 'react-redux';

export const useFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onSetFilter = ({ target }) => {
    dispatch(setStatusFilter(target.value));
  };

  return [filter, onSetFilter];
};
