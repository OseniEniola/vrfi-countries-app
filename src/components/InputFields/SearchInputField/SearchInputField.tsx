import React, { useCallback, useState } from 'react';
import style from './SearchInputField.module.scss';
import MagnifyingGlass from '../../../assets/images/icons/magnifying_glass_icon.svg';
import { debounce } from 'lodash';

interface SearchInputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
}) => {

  const [inputValue, setInputValue] = useState(value);

  // Debounced function to limit calls to `onChange`
  const debouncedOnChange = useCallback(
    debounce((newValue: any) => {
        console.log(newValue)
      onChange(newValue);
    }, 300),
    [onChange]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    debouncedOnChange(event.target.value);
  };
  return (
    <div className={style.container_wrap}>
      <img src={MagnifyingGlass} alt="search" />
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={handleChange}
        className={style.input}
      />
    </div>
  );
};

export default SearchInput;
