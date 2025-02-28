import { Dropdown, Spinner } from 'react-bootstrap';
import './DropdownBtn.scss';
import { useState } from 'react';
import CheckIcon from '../../../assets/images/icons/checkicon.svg';

export interface DropdownOption {
  label: string;
  value: any;
  disabled?: boolean; // Optional: Disable specific options
  icon?: string;
}

interface CustomDropdownProps<T> {
  title?: string;
  options?: T[];
  isLoadingOptions?: boolean
  onSelect: (option: T) => void;
}

const DropdownBtn: React.FC<CustomDropdownProps<any>> = ({
  title,
  options,
  onSelect,
  isLoadingOptions
}) => {
  const [selectedItem, SetSelectedItem] = useState();

  const handleClick = (option) => {
    SetSelectedItem(option.name || option.label);
    onSelect(option.name || option.label);
  };

  return (
    <Dropdown className={'custom_dropdown'}>
      <Dropdown.Toggle className={'toggle'}>
        {selectedItem ? selectedItem : (title || 'Select an option')} {isLoadingOptions && <Spinner size="sm" animation="grow" variant="secondary" />}
      </Dropdown.Toggle>

      <Dropdown.Menu className={'dropdown_menu'}>
        {options &&
          options.map((option, index) => (
            <Dropdown.Item
              className={`${selectedItem === (option.name || option.label) ? 'selected' : ''}`}
              key={index}
              onClick={() => handleClick(option)}
              disabled={option.disabled}
            >
              {option.icon && (
                <img src={option.icon} alt="" width="16" className="me-2" />
              )}
              {option.name || option.label}{' '}
              {selectedItem == (option.name || option.label) && (
                <img src={CheckIcon} alt="" width="10" className="me-3" />
              )}
            </Dropdown.Item>
          ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownBtn;
