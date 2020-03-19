import React from 'react'
import { render, fireEvent } from '@testing-library/react'; 
import SearchForm from './SearchForm.js';
 import '@testing-library/jest-dom'

describe('SearchForm', () => {
  it('should render a search form to the page', () => {
    const mockSearchArticles = jest.fn();
    const { getByPlaceholderText } = render(<SearchForm
      searchArticles={mockSearchArticles}
    />)

    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  })

  it('should invoke the searchArticles method when search is clicked', () => {
    Date.now = jest.fn().mockImplementation(()=> 12345)
    const mockSearchArticles = jest.fn();
    const { getByText, getByPlaceholderText } = render(<SearchForm
      searchArticles={mockSearchArticles}
    />)

    fireEvent.change(getByPlaceholderText(/Search/i), { target: { value: 'Who' } })
    fireEvent.click(getByText("Search"));

    expect(mockSearchArticles).toHaveBeenCalledWith("Who")
  })
})
