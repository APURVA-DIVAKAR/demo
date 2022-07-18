// TODO
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
it("size",()=>{
    render(<App/>)
    const element = screen.getByTestId(`sizes`)
    // fireEvent.click(element)
    expect(element.prop('size')).toBe('xs')
    expect(element.prop('size')).toBe('sm')
    expect(element.prop('size')).toBe('md')
    expect(element.prop('size')).toBe('lg')
})
