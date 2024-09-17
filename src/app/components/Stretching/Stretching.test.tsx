import { render, screen } from '@testing-library/react';
import Streching from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Streching updateFunction={()=>{}} setWorkoutType={()=>{}} />);
    const stretchTitle = screen.getByRole('heading', { level: 2 });
    expect(stretchTitle).toHaveTextContent('Mobility');
  });
  test('to have button',()=>{
    render(<Streching updateFunction={()=>{}} setWorkoutType={()=>{}} />);
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument()
 })
});
//FEEDBACK HERE: everything allright here, I had only setWorkoutType={()=>{}} to properly adjust to my structure
//Difficult to understand button fiunctionality from just a header