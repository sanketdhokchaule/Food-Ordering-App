import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import '@testing-library/jest-dom';


describe("Contact us page Test cases",()=>{
    beforeAll(()=>{
        console.log("before all");
    })

    beforeEach(()=>{
        console.log("before each");
    })

    afterAll(()=>{
        console.log('after all');
    })

    afterEach(()=>{
        console.log('after eaach');
    })


    test("it should load contact us component", ()=>{
        render(<Contact/>);
    
        
        //Querying
        const heading = screen.getAllByRole('heading');
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
})

