import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';

describe('Check the functionality works correct', () => {
  it('checks if UserName component renders and works correctly', () => {
    render(<Home />);

    const mockName = 'Rob';

    const userInput = screen.getByLabelText('Enter your name below');
    expect((userInput as HTMLInputElement).value).toBe('');

    fireEvent.change(userInput, { target: { value: mockName } });
    expect((userInput as HTMLInputElement).value).toBe(mockName);

    fireEvent.click(screen.getByTestId('add-userName'));

    expect(
      screen.queryByLabelText('Enter your name below')
    ).not.toBeInTheDocument();

    expect(screen.queryByTestId('add-userName')).not.toBeInTheDocument();
  });
  it('Check the cardio card render', () => {
    render(<Home />);

    const mockName = 'Josefin';
    fireEvent.change(screen.getByLabelText('Enter your name below'), {
      target: { value: mockName },
    });
    fireEvent.click(screen.getByTestId('add-userName'));

    const cardioTitle = screen.getAllByRole('heading', { level: 2 });

    expect(cardioTitle.length).toBe(4);
    //challenging because not present in unit test
    expect(screen.getByTestId('cardio-card')).toBeInTheDocument();
    expect(screen.getByTestId('gym-card')).toBeInTheDocument();
    expect(screen.getByTestId('challenge-card')).toBeInTheDocument();
    expect(screen.getByTestId('stretching-card')).toBeInTheDocument();
  });

  it('Cardio cards button function correctly', () => {
    render(<Home />);
    const mockName = 'Diyako';
    fireEvent.change(screen.getByLabelText('Enter your name below'), {
      target: { value: mockName },
    });
    fireEvent.click(screen.getByTestId('add-userName'));
//challenging because not present in unit test
    const buttons = screen.getByTestId('getWorkout-Cardio');
    expect(buttons).toBeInTheDocument();

    fireEvent.click(buttons);
    expect(screen.getByTestId('Cardio')).toBeInTheDocument();

    const closeButton = screen.getAllByTestId('closeBtn');
    expect(closeButton.length).toBe(1);

    fireEvent.click(closeButton[0]);
    //challenging because not present in unit test
    expect(screen.getByTestId('cardio-card')).toBeInTheDocument();
    expect(screen.getByTestId('gym-card')).toBeInTheDocument();
    expect(screen.getByTestId('challenge-card')).toBeInTheDocument();
    expect(screen.getByTestId('stretching-card')).toBeInTheDocument();
  });
});
//FEEDBACK: overall all integration test are very well written.
//many of the testId where not present as unit test so that I had to go back and add them.

//REFACTOR integration test with complete flow

it('DAVIDE/REFACTOR integration test whole flow', () => {
  render(<Home />);
  const mockName = 'Diyako';
  fireEvent.change(screen.getByLabelText('Enter your name below'), {
    target: { value: mockName },
  });
  fireEvent.click(screen.getByTestId('add-userName'));
  //passed
  expect(screen.getByTestId('cardio-card')).toBeInTheDocument();
  expect(screen.getByTestId('gym-card')).toBeInTheDocument();
  expect(screen.getByTestId('challenge-card')).toBeInTheDocument();
  expect(screen.getByTestId('stretching-card')).toBeInTheDocument();

  const exercisesBtn= screen.getAllByText("Get workout")
  //passed
  expect(exercisesBtn.length).toBe(4)
  fireEvent.click(exercisesBtn[0]);
  const closeButton = screen.getByText('Go Back');
  //passed
  expect(closeButton).toBeInTheDocument();

  fireEvent.click(closeButton);
  //passed
  expect(screen.getByTestId('cardio-card')).toBeInTheDocument();
  expect(screen.getByTestId('gym-card')).toBeInTheDocument();
  expect(screen.getByTestId('challenge-card')).toBeInTheDocument();
  expect(screen.getByTestId('stretching-card')).toBeInTheDocument();
  
});