import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from '../../store';

describe('Home', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let component: any;
  beforeEach(() => {
    component = render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );

  });

  test('renders Welcome message on the home login screen', () => {

    expect(component.queryByText('Welcome!')).toBeInTheDocument();
  },);

  test('Login input on the home login page', () => {

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });


});

