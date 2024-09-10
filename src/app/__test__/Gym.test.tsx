import { render, screen } from '@testing-library/react';
import Gym from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Gym updateFunction={()=>{}}/>);
    const cardioTitle = screen.getByRole('heading', { level: 2 });
    expect(cardioTitle).toHaveTextContent('Gain muscle');
  });
  test('to have button',()=>{
    render(<Gym updateFunction={()=>{}}/>);
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument()
 })
});
