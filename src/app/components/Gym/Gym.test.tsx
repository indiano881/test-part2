import { render, screen } from '@testing-library/react';
import Gym from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Gym updateFunction={()=>{}} setWorkoutType={()=>{}}/>);
    const cardioTitle = screen.getByRole('heading', { level: 2 });
    expect(cardioTitle).toHaveTextContent('Gain muscle');
  });
  test('to have button',()=>{
    
    render(<Gym updateFunction={()=>{}} setWorkoutType={()=>{}}/>);
   const button = screen.getByRole("button")
   expect(button).toBeInTheDocument()
 })
});
//FEEDBACK HERE: everything allright here, I had only setWorkoutType={()=>{}} to properly adjust to my structure
//Difficult to understand button fiunctionality from just a header