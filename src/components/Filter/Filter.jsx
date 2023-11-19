import { InputFilter } from './Filter.styled';

import { useDispatch } from 'react-redux';

import { changeFilterValue } from 'redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = evt => {
    const value = evt.currentTarget.value;
    dispatch(changeFilterValue(value));
  };

  return (
    <div>
      <InputFilter
        type="text"
        name="filter"
        placeholder="Contacts filter"
        onChange={handleChange}
      />
    </div>
  );
};
// import { FilterContainer, Field } from './Filter.styled';

// export const Filter = ({ value, onChangeFilter }) => {
//   return (
//     <FilterContainer>
//       Find contacts by name
//       <Field
//         type="text"
//         value={value}
//         onChange={onChangeFilter}
//         placeholder=" enter contact"
//       />
//     </FilterContainer>
//   );
// };
