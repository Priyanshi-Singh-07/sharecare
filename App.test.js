import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for the "toBeInTheDocument" matcher
import App from './App';

describe('App Component', () => {
  // Helper function to check the layout
  const checkLayoutForViewport = (width) => {
    global.innerWidth = width;
    global.dispatchEvent(new Event('resize'));
    render(<App />);

    // Check header is rendered correctly
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Check the form is rendered correctly
    expect(screen.getByRole('form')).toBeInTheDocument();
  };

  test('should render header on top and form below on small screens', () => {
    checkLayoutForViewport(500); // Simulate a mobile screen width
    // Check the header is rendered on top and form below
    const header = screen.getByRole('banner');
    const form = screen.getByRole('form');

    // Validate header appears first and form second
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(header.compareDocumentPosition(form) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test('should render header and form side by side on larger screens', () => {
    checkLayoutForViewport(1000); // Simulate a desktop screen width
    // Check header is rendered and forms are side by side
    const header = screen.getByRole('banner');
    const form = screen.getByRole('form');

    // Validate header is at the top and form is in the expected position
    expect(header).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(header.compareDocumentPosition(form) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });
});
