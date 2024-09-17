import { render, screen } from '@testing-library/react';
import DisplayCard from '.';
import { CardioExercise } from '../../../../utils/types';
//this type is a little bit confusing
const cardioWorkout: CardioExercise[] = [
  //why run is without ""
  { Run: '3 x 800m' },
  { 'Sprint Intervals': '10 x 100m' },
];

describe('DisplayCard Component', () => {
  it('renders Cardio workout correctly', () => {
    render(<DisplayCard onClick={()=>{}} workout={cardioWorkout} type="Cardio" />);

    const workoutTitle = screen.queryAllByRole('heading', { level: 3 });
    const workoutValue = screen.queryAllByRole('paragraph');
    const closeBtn = screen.getByRole("button")
    

    expect(workoutTitle.length).toBe(2);
    expect(workoutValue.length).toBe(2);
    expect(closeBtn).toBeInTheDocument();

    const workout1 = screen.getByText('Run');
    const workout1Value = screen.getByText('3 x 800m');

    expect(workout1).toBeInTheDocument();
    expect(workout1Value).toBeInTheDocument();
    //this second part is in oneline- before was done in multiple lines
    expect(screen.getByText('Sprint Intervals')).toBeInTheDocument();
    expect(screen.getByText('10 x 100m')).toBeInTheDocument();
  });
});
//here are the most controversial test: not easy to understand why is 1 exercise with lenght 2 to be expected
//this type CardioExercise is confuisong since run is not wrap as a string and it was epected a single exercise


  