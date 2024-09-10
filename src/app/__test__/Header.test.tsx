import { render, screen } from '@testing-library/react';
import Header from '.';

describe('That the header is  rendered correctly', () => {
  it('Check the header title render correctly', () => {
    render(<Header />);

    let headerTitle = screen.getByRole('heading', {
      level: 1,
      name: 'Training Buddy',
    });
    expect(headerTitle).toBeInTheDocument();
  });
  it('Check the subtitle render correctly', () => {
    render(<Header />);
    
    let headerSubtitle = screen.getAllByTestId("sub-Item");
    expect(headerSubtitle.length).toBe(3)
  });
});
