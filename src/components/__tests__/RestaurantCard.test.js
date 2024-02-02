import { render, screen } from "@testing-library/react";
import RestaurantCard from '../RestaurantCard';
import MOCK_DATA from '../mocks/restCardMock.json';
import '@testing-library/jest-dom';

it('should render restaurant component with props data',()=>{

    render(
        <RestaurantCard resData={MOCK_DATA}/>
    )

    const name = screen.getByText("LunchBox - Meals and Thalis");

    expect(name).toBeInTheDocument();
})