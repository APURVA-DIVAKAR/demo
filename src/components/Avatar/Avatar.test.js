
import { render,screen,getByTestId,fireEvent } from '@testing-library/react';
import App from '../../App'
// describe("checking if button disabled", () => {
   
   
    
// })
it("disable",()=>{
    render(<App/>)
    const element = screen.getByTestId(`dis`)
    // fireEvent.click(element)
    expect(element).toHaveProperty('disabled', true)
})