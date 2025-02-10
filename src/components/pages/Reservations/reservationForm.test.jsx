import { render, screen, fireEvent } from "@testing-library/react";
import ReservationForm from "./reservationForm";

const availableTimes = ["17:00", "17:30"];
const today = new Date().toISOString().split("T")[0];

describe("Reservation form", () => {
  const submitData = jest.fn();
  const dispatchOnDateChange = jest.fn();

  beforeEach(() => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    );
  });

  test("should correctly render all fields and their default values", () => {
    const submitButton = screen.getByRole("button", { name: /reserve now!/i });
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute("type", "submit");
    expect(submitButton).toBeDisabled(); // Initially disabled because fields are empty

    // Check for all input fields
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
  });

  test("should successfully submit form with default values", () => {
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    const phoneNumberInput = screen.getByLabelText(/phone number/i);
    const dateInput = screen.getByLabelText(/date/i);
    const submitButton = screen.getByRole("button", { name: /reserve now!/i });

    fireEvent.change(firstNameInput, { target: { value: "John" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(emailInput, { target: { value: "john.doe@example.com" } });
    fireEvent.change(phoneNumberInput, { target: { value: "1234567890" } });
    fireEvent.change(dateInput, { target: { value: today } });

    // Ensure all fields are valid before clicking submit
    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    expect(submitData).toHaveBeenCalledWith({
      date: today,
      time: availableTimes[0],
      numberOfGuests: 1,
      occasion: "Birthday",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "1234567890",
    });
  });

  test("should display an error message and disable submit button when date field's value is empty", () => {
    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: "" } });
    fireEvent.blur(dateInput);

    const errorMessages = screen.getAllByTestId("error-message");
    const submitButton = screen.getByRole("button", { name: /reserve now!/i });

    expect(errorMessages).toHaveLength(5); // One for each validation field
    expect(submitButton).toBeDisabled();
  });

  test("should display an error message and disable submit button when number of guests field's value is empty", () => {
    const numberOfGuestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(numberOfGuestsInput, { target: { value: "" } });
    fireEvent.blur(numberOfGuestsInput);

    const errorMessages = screen.getAllByTestId("error-message");
    const submitButton = screen.getByRole("button", { name: /reserve now!/i });

    expect(errorMessages).toHaveLength(5); // One for each validation field
    expect(submitButton).toBeDisabled();
  });
});
