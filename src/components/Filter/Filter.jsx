import { useDispatch, useSelector } from 'react-redux';
import { FcSearch } from 'react-icons/fc';
import { selectContacts, selectFilter } from 'redux/Selectors';
import { setStatusFilter } from 'redux/FilterSlice';
import { InputStyles, Title } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = event => {
    dispatch(setStatusFilter(event.target.value.trim()));
  };

  return useSelector(selectContacts).length < 1 ? (
    <Title>Add your first contact</Title>
  ) : (
    <InputStyles
      type="text"
      name="filter"
      placeholder="Search by name"
      value={filter}
      onChange={handleFilterChange}
      prefix={<FcSearch />}
    />
  );
}

export default Filter;
// import { InputFilter, LabelFilter } from './Filter.styled';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFilter } from 'redux/Selectors';
// import { setFilter } from 'redux/FilterSlice';

// export const Filter = () => {
//   const dispatch = useDispatch();
//   const filter = useSelector(selectFilter);

//   const onFilter = e => {
//     dispatch(setFilter(e.target.value));
//   };

//   return (
//     <LabelFilter>
//       Find contacts by name
//       <InputFilter
//         type="text"
//         placeholder="Enter name of contact"
//         value={filter}
//         onChange={onFilter}
//       ></InputFilter>
//     </LabelFilter>
//   );
// };

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
