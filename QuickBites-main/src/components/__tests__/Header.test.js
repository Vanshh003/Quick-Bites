import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // const loginButton = screen.getByRole("button");
    // const loginButton = screen.getByText("Login");

    // if there are multiple buttons on the screen and i want to find out the specific login button
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
});



test("Should load Header Component with 0 Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart - (0 items)");

    expect(cartItems).toBeInTheDocument();
});



test("Should load Header Component with Cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    // Regex can also be written
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});



test("Should cahnge Login button to Logout on click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", { name: "Login" });
    
    // to click, we need to fire an event
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
});