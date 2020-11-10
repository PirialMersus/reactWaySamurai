import React from 'react';
import { render } from '@testing-library/react';
import App, {SamuraiJsApp} from './App';

test('renders learn react link', () => {
  const { getByText } = render(<SamuraiJsApp />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
