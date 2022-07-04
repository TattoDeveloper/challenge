import { render } from '@testing-library/react';

import SearchBox from './search-box';

describe('SearcBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBox />);
    expect(baseElement).toBeTruthy();
  });
});
