import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import  { render, fireEvent } from '@testing-library/react'; 
 import '@testing-library/jest-dom'

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('can search for articles', () => {
    const { getByText, getByPlaceholderText } = render(<App />)

    fireEvent.change(getByPlaceholderText(/Search/i), { target: { value: 'who' } })
    fireEvent.click(getByText("Search"));

    expect(getByText("The Who postpones Denver Concert at the Pepsi Center")).toBeInTheDocument();
    expect(getByText("Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.")).toBeInTheDocument();
  })

})
