import { render, screen } from '@testing-library/react';
import Streching from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Streching updateFunction={()=>{}}/>);
    const stretchTitle = screen.getByRole('heading', { level: 2 });
    expect(stretchTitle).toHaveTextContent('Mobility');
  });
  test('to have button',()=>{
    render(<Streching updateFunction={()=>{}}/>);
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument()
 })
});