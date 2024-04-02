import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import ContextComp from "../ContextComp";

test('Should load Contact Us Component', () => {
    render(<ContextComp/>)
    const heading = screen.getByRole('heading')

    // Assertion...............
    expect(heading).toBeInTheDocument()
})

test('Should load Contact Us Component', () => {
    render(<ContextComp/>)
    const button = screen.getByText('Change Score')

    // Assertion...............
    expect(button).toBeInTheDocument()
})