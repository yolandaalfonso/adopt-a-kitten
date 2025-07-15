// src/components/Button/Button.test.jsx
import { render, screen, fireEvent } from '@testing-library/react'; // Import render, screen, and fireEvent
import Button from './Button'; // Import your Button component
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for testing components that use Link
import { vi, describe, beforeEach, test, expect } from 'vitest'; // Import vi for mocking

// Mock the useNavigate hook from react-router-dom
// This is crucial because `useNavigate` is a hook and needs to be mocked
// when testing components that use it outside of a real browser environment.
const mockedUseNavigate = vi.fn();
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal(); // Get the actual exports from react-router-dom
  return {
    ...actual, // Spread all actual exports
    useNavigate: () => mockedUseNavigate, // Override useNavigate with our mock
    // Ensure BrowserRouter is also exported if needed by other tests in the same file
    BrowserRouter: actual.BrowserRouter,
  };
});


// Describe block groups related tests together
describe('Button Component', () => {
  // Clear mocks before each test to ensure test isolation
  beforeEach(() => {
    mockedUseNavigate.mockClear(); // Reset the mock's call history before each test
  });

  // --- Test 1: Renders the button with the correct text ---
  test('renders button with provided text', () => {
    // 1. Arrange: Set up the component to be tested.
    // We wrap Button in BrowserRouter because it uses `useNavigate` internally,
    // which relies on React Router's context.
    render(
      <BrowserRouter>
        <Button text="Cimbel" />
      </BrowserRouter>
    );

    // 2. Act: This test primarily involves rendering, so no specific user action is needed here.

    // 3. Assert: Check if the button with the text "Adopt Me!" is visible in the document.
    // `screen.getByText` finds an element by its text content.
    // `toBeInTheDocument()` is a matcher from @testing-library/jest-dom.
    expect(screen.getByText('Cimbel')).toBeInTheDocument();
  });

  // --- Test 2: Navigates to the correct path when clicked ---
  test('navigates to the specified path on click', () => {
    // 1. Arrange: Set up the component with a 'to' prop for navigation.
    const targetPath = '/adopt'; // The path we expect to navigate to.
    render(
      <BrowserRouter>
        <Button text="Go to Adoption Page" to={targetPath} />
      </BrowserRouter>
    );

    // 2. Act: Simulate a user clicking the button.
    // `screen.getByRole('button', { name: /go to adoption page/i })` finds the button by its accessible role and text.
    // `fireEvent.click()` simulates a click.
    fireEvent.click(screen.getByRole('button', { name: /go to adoption page/i }));

    // 3. Assert: Check if the `useNavigate` function was called with the correct path.
    // `mockedUseNavigate` is our mock function.
    // `toHaveBeenCalledTimes(1)` checks if it was called exactly once.
    // `toHaveBeenCalledWith(targetPath)` checks if it was called with the expected path.
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUseNavigate).toHaveBeenCalledWith(targetPath);
  });
});