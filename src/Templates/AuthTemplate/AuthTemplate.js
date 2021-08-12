import React from 'react';
import './AuthTemplate.scss';

export const AuthTemplate = ({ children }) => {
  return (
    <div className="authSec">
      <div class="form-signin">{children}</div>
    </div>
  );
};
