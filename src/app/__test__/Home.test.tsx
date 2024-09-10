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

    const buttons = screen.getByTestId('getWorkout-Cardio');
    expect(buttons).toBeInTheDocument();

    fireEvent.click(buttons);
    expect(screen.getByTestId('Cardio')).toBeInTheDocument();

    const closeButton = screen.getAllByTestId('closeBtn');
    expect(closeButton.length).toBe(1);

    fireEvent.click(closeButton[0]);

    expect(screen.getByTestId('cardio-card')).toBeInTheDocument();
    expect(screen.getByTestId('gym-card')).toBeInTheDocument();
    expect(screen.getByTestId('challenge-card')).toBeInTheDocument();
    expect(screen.getByTestId('stretching-card')).toBeInTheDocument();
  });
});
