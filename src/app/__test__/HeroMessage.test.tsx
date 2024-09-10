import { render, screen } from '@testing-library/react';
import HeroMessage from '.';
describe('display message render correctly', () => {
  const mockName = "Diyako"
  test('display message title render correctly', () => {
    render(<HeroMessage name={mockName} />);
    const messageTitle = screen.getByRole("heading", {level: 3, name: `Hi Diyako👋🏼 Find Your Perfect Workout!`});
    expect(messageTitle).toBeInTheDocument()
  });
  it("display message paragraph render correctly", ()=> {
    render(<HeroMessage name={mockName} />);
    const messageParagraph = screen.getByRole("paragraph")
    expect(messageParagraph).toBeInTheDocument();
  })
});
