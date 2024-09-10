import { render, screen, fireEvent } from '@testing-library/react';
import UserName from '.';

describe('UserName component render correctly', () => {
  it('check everything renders', () => {
    render(<UserName updateUser={() => {}} />);
    const userInput = screen.getByLabelText('Enter your name below');
    const button = screen.getByTestId('add-userName');

    expect(userInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  test('User input is saved in state', () => {
    render(<UserName updateUser={() => {}} />);

    const mockData = 'Rob';
    let userInput = screen.getByLabelText('Enter your name below');
    expect((userInput as HTMLInputElement).value).toBe('');

    fireEvent.change(userInput, { target: { value: mockData } });
    userInput = screen.getByLabelText('Enter your name below');
    expect((userInput as HTMLInputElement).value).toBe(mockData);
  });
});
