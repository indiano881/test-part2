import { render, screen } from '@testing-library/react';

import DailyChallenge from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<DailyChallenge updateFunction={()=>{}}/>);
    const cardioTitle = screen.getByRole('heading', { level: 2 });
    expect(cardioTitle).toHaveTextContent('Challenge');
  });
  test('to have button',()=>{
    render(<DailyChallenge updateFunction={()=>{}}/>);
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument()
 })
});
