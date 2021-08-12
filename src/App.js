import React from 'react';
import './App.scss';
import { Login } from './Pages/Auth/Login';
import { AuthTemplate } from './Templates/AuthTemplate';
const App = () => {
  return (
    <main>
      <AuthTemplate>
        <Login />
      </AuthTemplate>
    </main>
  );
};

export default App;
