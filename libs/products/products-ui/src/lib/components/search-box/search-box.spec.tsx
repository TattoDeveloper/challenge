import React, { ReactNode } from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBox from './search-box';
import { search } from "../../mock-data/data"
import {  Router } from 'react-router-dom';
import { createMemoryHistory, MemoryHistory } from 'history';

describe('SearcBox', () => {
  let history: MemoryHistory;
   
   beforeEach(()=> {
   history = createMemoryHistory()
   render(
     <Router location={history.location} navigator={history}>
        <SearchBox />
     </Router>
     );
   })

  it('When the input is empty and press enter / search button should do nothing', () => {
    const input: HTMLInputElement = screen.getByRole("searchbox")
    const button = screen.getByRole("button")

    fireEvent.click(button)
   
    expect(input.value).toBe("")
    expect(history.location.pathname).toBe("/")

  });

  it('When input has a value and press enter / search button should navigate', () => {
    const input: HTMLInputElement = screen.getByRole("searchbox")

    fireEvent.change(input, {target: { value: search.query }})
    fireEvent.click(screen.getByRole("button"))

    expect(input.value).toBe(search.query)
    expect(history.location.pathname).toBe(search.pathname)
    expect(history.location.search).toBe(`?search=${search.query}`)

  });
});
