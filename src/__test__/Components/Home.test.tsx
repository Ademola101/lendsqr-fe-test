import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../../Pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store  from '../../store';



test('renders Home', () => {

  render(
    <Router>
      <Provider store={store}>
        <Home />
      </Provider>
    </Router>
  );
  expect(screen.getByText('Welcome!')).toBeInTheDocument();
});
