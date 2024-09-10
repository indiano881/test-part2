import { render, screen } from '@testing-library/react';
import TrainingCard from '.';


describe('The training card renders correct', () => {
    const testImage = {
        src: "/public/cardio.png", 
        height: 100,
        width: 100,
        blurDataURL: "data:image/png;base64,..." 
      };
  it('The card title renders', () => {
    const mockData = 'test1';

    render(<TrainingCard onClick={()=>{}} title={mockData} image={testImage
    } bgColor={''} />);

    const cardTitle = screen.getByRole('heading', { level: 2, name: mockData });
    expect(cardTitle).toBeInTheDocument();
  });
  it("the image is rendering correct", ()=> {
    const mockData = 'test1';
    
    render(<TrainingCard onClick={()=>{}} title={mockData} image={testImage} bgColor={''} />);

    const cardImage = screen.getByTestId("card-image")
    expect(cardImage).toBeInTheDocument()
  })
  it("the button is rendering correct", ()=> {
    const mockData = 'test1';
      
    render(<TrainingCard onClick={()=>{}} title={mockData} image={testImage} bgColor={''} />);

    const CardButton = screen.getByRole("button")
    expect(CardButton).toBeInTheDocument()
  })
});
