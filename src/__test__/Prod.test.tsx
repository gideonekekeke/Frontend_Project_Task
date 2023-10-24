import { afterEach, describe } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Prod from "../components/Prod/Prod";

// runs a cleanup after each test case 
afterEach(() => {
	cleanup();
});

describe("Product list component", () => {
	test("Should render without errors when provided with itemsPerPage prop ", () => {
		const { container } = render(<Prod itemsPerPage={4} />);
		expect(container).toBeInTheDocument();
	});

	//Find the sort button and click it to change the sort order to "Low to High"
	test("should check for sort (Low to High)", () => {
		render(<Prod itemsPerPage={4} />);
		const sortButton = screen.getByText("Low to High");
		fireEvent.click(sortButton);
	});

	test("should check for sort (High to Low)", ()=>{
		render(<Prod itemsPerPage={4}/>);
		const sortButton = screen.getByText("High to Low")
		fireEvent.click(sortButton)
	})
});
