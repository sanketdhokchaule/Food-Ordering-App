import { fireEvent, render, screen } from "@testing-library/react"
import Body from '../Body';
import MOCK_DATA from '../../components/mocks/mockRestList.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should render the body component with search', async()=>{
    await act(async ()=>{
        render(
        <BrowserRouter><Body/></BrowserRouter>);
    })
    
    const searchButton = screen.findByRole('button',{name:'Search'});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput,{target : {value : 'burger'}});

    fireEvent.click(searchButton);

    //expect(searchButton).toBeInTheDocument();

    //screen should load 3 cards
    const cards = screen.getAllByTestId('resCard');

    expect(cards).toBe(3);
})