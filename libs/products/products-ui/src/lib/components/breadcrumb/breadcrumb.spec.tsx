import React from 'react'
import { render, screen,  } from '@testing-library/react';
import Breadcrumb from './breadcrumb';

import { categories } from "../../mock-data/data"

describe('Breadcrumb', () => {
  it('should render successfully a two categories breadcrumb', () => {
    render(<Breadcrumb categories={categories} />);

    const categoryList = screen.getAllByRole("listitem")

    expect(categoryList.length).toBe(2)
    expect(categoryList[0].textContent).toBe(categories[0])
    expect(categoryList[1].textContent).toBe(categories[1])
  });
});
