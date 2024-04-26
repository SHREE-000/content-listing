import { screen, render } from '@testing-library/react'
import Spinner from "../../shared/components/Spinner";

describe("Error Message", () => {
    test("Renders Correctly", ()=> {
        render(<Spinner />);
        const spinnerElem = screen.getByRole("status");
        expect(spinnerElem).toBeInTheDocument();
    })
})