import React from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import { Login } from './Pages/Auth/Login';
import { store } from './Redux/store';
import { AuthTemplate } from './Templates/AuthTemplate';
const App = () => {
  return (
    <Provider store={store}>
      <main>
        <AuthTemplate>
          <Login />
        </AuthTemplate>
      </main>
    </Provider>
  );
};

export default App;
