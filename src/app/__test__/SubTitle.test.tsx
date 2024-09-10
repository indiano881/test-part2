import { render, screen } from '@testing-library/react';
import SubTitle from '.';


describe('Subtitle works correctly', () => {
  it('Sutitle render props correctly', () => {
    const mockData1 = 'test1';
    render(<SubTitle title={mockData1} />);

    const subtitle = screen.getByRole('heading', {
      level: 3,
      name: mockData1
    });
    expect(subtitle).toBeInTheDocument();
  });
});
