import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';

const Submenu = ({ subItems }) => (
  subItems.map(item => (
    <div key={item.id}>
      {item.label}
    </div>
  ))
);

Submenu.propTypes = {
  subItems: arrayOf(PropTypes.object),
};

Submenu.defaultProps = {
  subItems: [],
};

export default Submenu;
