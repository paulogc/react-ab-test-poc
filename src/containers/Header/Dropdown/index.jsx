import React from 'react';
import PropTypes from 'prop-types';

const DropDown = ({
  children,
  label,
  isSelected,
  id,
  onClick,
}) => (
  <li>
    <div
      role="button"
      tabIndex={0}
      onKeyDown={() => {}}
      onClick={() => onClick(id)}
    >
      {label}
      {isSelected && children}
    </div>
  </li>
);


DropDown.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

DropDown.defaultProps = {
  label: '',
  children: null,
  isSelected: false,
};

export default DropDown;
