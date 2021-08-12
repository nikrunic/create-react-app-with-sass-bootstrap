import React from 'react';
import './BaseTemplate.scss';

export const BaseTemplate = ({ children }) => {
  return (
    <div className="authSec">
      <div class="form-signin">{children}</div>
    </div>
  );
};
