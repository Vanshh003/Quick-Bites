import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"


// just to group the testcases together.. we can also have a describe inside a describe
describe("Contact us Test Cases", () => {
   
    // instead of test, it can also be written
    // it("Should load contact us component", () => {

    //     // to test a ui component, you need to render that component to jsdom first
    //     render(<Contact />);            // rendering contact component on jsdom
    
    //     // whatver is rendered on jsdom, can be get using this screen
    //     const heading = screen.getByRole("heading");        // it will find all the headings, and give it in this heading variable
    
    //     // Assertion
    //     expect(heading).toBeInTheDocument();    // this function will basically find if the heading was inside the document/screen or not
    
    // });
    
    test("Should load contact us component", () => {

        // to test a ui component, you need to render that component to jsdom first
        render(<Contact />);            // rendering contact component on jsdom
    
        // whatver is rendered on jsdom, can be get using this screen
        const heading = screen.getByRole("heading");        // it will find all the headings, and give it in this heading variable
    
        // Assertion
        expect(heading).toBeInTheDocument();    // this function will basically find if the heading was inside the document/screen or not
    
    });
    
    
    test("Should load button inside contact component", () => {
    
        // to test a ui component, you need to render that component to jsdom first
        render(<Contact />);            // rendering contact component on jsdom
    
        // whatver is rendered on jsdom, can be get using this screen
        const button = screen.getByRole("button");        // it will find all the buttons, and give it in this button variable
    
        // instead of this, we can also getByText
        // const button = screen.getByText("Submit")
    
    
        // Assertion
        expect(button).toBeInTheDocument();    // this function will basically find if the button was inside the document/screen or not
    
    });
    
    
    test("Should load input name contact component", () => {
    
        render(<Contact />);      
    
        const inputName = screen.getByPlaceholderText("name")
    
        // Assertion
        expect(inputName).toBeInTheDocument();  
    
    });
    
    
    test("Should load 2 input boxes in contact component", () => {
    
        render(<Contact />);      
    
        const inputBoxes = screen.getAllByRole("textbox")           // this returns a jsx element/react element/object/react fibre node/virtual dom object all are same
    
        // Assertion
        expect(inputBoxes.length).toBe(2);  
    
    });

});

