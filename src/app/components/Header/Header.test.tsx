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
//FEEDBACK: everything allright
//give developer much flexibility to what make with 3 sub-item
//change let into const
//REFACTOr BELOW MORE RESTRICT
describe('DAVIDE REFACTOR', () => {
  
  it('Check the subtitle render correctly', () => {
    render(<Header />);
    
    const headerSub1 = screen.getByText("No equippment needed!");
    const headerSub2 = screen.getByText("Train everywhere");
    const headerSub3 = screen.getByText("Stay healthy");
    expect(headerSub1).toBeInTheDocument()
    expect(headerSub2).toBeInTheDocument()
    expect(headerSub3).toBeInTheDocument()
  });
});