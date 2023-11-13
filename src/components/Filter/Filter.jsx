import { InputFilter, LabelFilter } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/Selectors';
import { setStatusFilter } from 'redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(setStatusFilter(e.target.value));
  };

  return (
    <LabelFilter>
      Find contacts by name
      <InputFilter
        type="text"
        placeholder="Enter name of contact"
        value={filter}
        onChange={onFilter}
      ></InputFilter>
    </LabelFilter>
  );
};

// import { useDispatch } from 'react-redux';
// import { filterContact } from 'redux/FilterSlice';
// import css from './Filter.module.css';

// const Filter = () => {
//   const dispatch = useDispatch();

//   const onChange = event => {
//     const normalizedValue = event.target.value.toLowerCase();

//     dispatch(filterContact(normalizedValue));
//   };

//   return (
//     <div>
//       <label className={css.formLabel}>
//         Find contacts by name
//         <input
//           className={css.formInput}
//           type="text"
//           name="filter"
//           onChange={onChange}
//         />
//       </label>
//     </div>
//   );
// };

// export default Filter;
