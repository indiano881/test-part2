import { render, screen } from '@testing-library/react';
import Cardio from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Cardio updateFunction={()=>{}} />);
    const cardioTitle = screen.getByRole('heading', { level: 2 });
    expect(cardioTitle).toHaveTextContent('Cardio');
  });
     test('to have button',()=>{
        render(<Cardio updateFunction={()=>{}}/>);
       const button = screen.getByRole("button")
       expect(button).toBeInTheDocument()
     })
});
