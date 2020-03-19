import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';

import  { render, fireEvent } from '@testing-library/react'; 
 import '@testing-library/jest-dom'

describe('Menu', () => {
  it('should render the expected text', () => {
    const mockDisplayArticles = jest.fn();
    const { getByText } = render(<Menu
      displayArticles={mockDisplayArticles}
    />)

    expect(getByText("Local News")).toBeInTheDocument();
    expect(getByText("Technology")).toBeInTheDocument();
    expect(getByText("Entertainment")).toBeInTheDocument();
    expect(getByText("Science")).toBeInTheDocument();
    expect(getByText("Health")).toBeInTheDocument();
  })

  it('should invoke the displayArticles method when clicked', () => {
    const mockDisplayArticles = jest.fn();
    const { getByText } = render(<Menu
      displayArticles={mockDisplayArticles}
    />)

    const localNewsLink = getByText("Local News");
    fireEvent.click(localNewsLink);

    expect(mockDisplayArticles).toHaveBeenCalledWith('local')
  })
})
