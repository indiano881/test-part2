import { render, screen } from '@testing-library/react';
import Cardio from '.';

describe('The componet renders correctly', () => {
  it('the component renders correctly', () => {
    render(<Cardio updateFunction={()=>{}} setWorkoutType={()=>{}}/>);
    const cardioTitle = screen.getByRole('heading', { level: 2 });
    expect(cardioTitle).toHaveTextContent('Cardio');
  });
     test('to have button',()=>{
        render(<Cardio updateFunction={()=>{}} setWorkoutType={()=>{}}/>);
       const button = screen.getByRole("button")
       expect(button).toBeInTheDocument()
     })
});

//FEEDBACK HERE: everything allright here, I had only setWorkoutType={()=>{}} to properly adjust to my structure
//Difficult to understand button fiunctionality from just a header
//it/test mixed syntax

//REFACTOR BELOW-since i did not use trainingCard component i can check that there is a image
test('DAVIDE REFACTOR-check image', () => {
  
    render(<Cardio updateFunction={()=>{}} setWorkoutType={()=>{}}/>);
    const imageActivity = screen.getByRole('img');
    expect(imageActivity).toBeInTheDocument();
  ;
     
});
