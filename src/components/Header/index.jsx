import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default () => (
  <div className="header-menu">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/fundos-de-investimento">Fundos de investimento</Link></li>
    </ul>
  </div>
);
