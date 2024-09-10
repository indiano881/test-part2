import { render, screen } from '@testing-library/react';
import DisplayCard from '.';
import { CardioExercise } from '@/utils/types';

const cardioWorkout: CardioExercise[] = [
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

    expect(screen.getByText('Sprint Intervals')).toBeInTheDocument();
    expect(screen.getByText('10 x 100m')).toBeInTheDocument();
  });
});
