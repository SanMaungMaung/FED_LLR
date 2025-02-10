import { useState } from "react";
import FormField from "./formField";

const ReservationForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData,
}) => {
  const minimumDate = new Date().toISOString().split("T")[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 10;
  const occasions = ["Birthday", "Anniversary"];
  const invalidDateErrorMessage = "Please choose a valid date";
  const invalidTimeErrorMessage = "Please choose a valid time";
  const invalidOccasionErrorMessage = "Please choose a valid occasion";
  const invalidNumberOfGuestsErrorMessage =
    "Please enter a number between 1 and 10";
  const invalidFirstNameErrorMessage = "Please enter your first name";
  const invalidLastNameErrorMessage = "Please enter your last name";
  const invalidEmailErrorMessage = "Please enter a valid email address";
  const invalidPhoneNumberErrorMessage = "Please enter a valid phone number";

  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [numberOfGuests, setNumberGuests] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const isDateValid = () => date !== "";
  const isTimeValid = () => time !== "";
  const isNumberOfGuestsValid = () => numberOfGuests !== "";
  const isOccasionValid = () => occasion !== "";
  const isFirstNameValid = () => firstName !== "";
  const isLastNameValid = () => lastName !== "";
  const isEmailValid = () => /\S+@\S+\.\S+/.test(email);
  const isPhoneNumberValid = () => /^\d{10}$/.test(phoneNumber);

  const areAllFieldsValid = () =>
    isDateValid() &&
    isTimeValid() &&
    isNumberOfGuestsValid() &&
    isOccasionValid() &&
    isFirstNameValid() &&
    isLastNameValid() &&
    isEmailValid() &&
    isPhoneNumberValid();

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = (e) => setTime(e.target.value);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitData({ date, time, numberOfGuests, occasion, firstName, lastName, email, phoneNumber });
  };

  return (
    <form onSubmit={handleFormSubmit} aria-labelledby="reservation-form-title">
      <FormField
        label="First Name"
        htmlFor="reservation-first-name"
        hasError={!isFirstNameValid()}
        errorMessage={invalidFirstNameErrorMessage}
      >
        <input
          type="text"
          id="reservation-first-name"
          name="reservation-first-name"
          value={firstName}
          required={true}
          aria-required="true"
          aria-invalid={!isFirstNameValid()}
          aria-describedby="reservation-first-name-error"
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FormField>
      <FormField
        label="Last Name"
        htmlFor="reservation-last-name"
        hasError={!isLastNameValid()}
        errorMessage={invalidLastNameErrorMessage}
      >
        <input
          type="text"
          id="reservation-last-name"
          name="reservation-last-name"
          value={lastName}
          required={true}
          aria-required="true"
          aria-invalid={!isLastNameValid()}
          aria-describedby="reservation-last-name-error"
          onChange={(e) => setLastName(e.target.value)}
        />
      </FormField>
      <FormField
        label="Email"
        htmlFor="reservation-email"
        hasError={!isEmailValid()}
        errorMessage={invalidEmailErrorMessage}
      >
        <input
          type="email"
          id="reservation-email"
          name="reservation-email"
          value={email}
          required={true}
          aria-required="true"
          aria-invalid={!isEmailValid()}
          aria-describedby="reservation-email-error"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>
      <FormField
        label="Phone Number"
        htmlFor="reservation-phone-number"
        hasError={!isPhoneNumberValid()}
        errorMessage={invalidPhoneNumberErrorMessage}
      >
        <input
          type="tel"
          id="reservation-phone-number"
          name="reservation-phone-number"
          value={phoneNumber}
          required={true}
          aria-required="true"
          aria-invalid={!isPhoneNumberValid()}
          aria-describedby="reservation-phone-number-error"
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormField>
      <FormField
        label="Date"
        htmlFor="reservation-date"
        hasError={!isDateValid()}
        errorMessage={invalidDateErrorMessage}
      >
        <input
          type="date"
          id="reservation-date"
          name="reservation-date"
          min={minimumDate}
          value={date}
          required={true}
          aria-required="true"
          aria-invalid={!isDateValid()}
          aria-describedby="reservation-date-error"
          onChange={handleDateChange}
        />
      </FormField>
      <FormField
        label="Time"
        htmlFor="reservation-time"
        hasError={!isTimeValid()}
        errorMessage={invalidTimeErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-time"
            name="reservation-time"
            value={time}
            required={true}
            aria-required="true"
            aria-invalid={!isTimeValid()}
            aria-describedby="reservation-time-error"
            onChange={handleTimeChange}
          >
            {availableTimes.map((times) => (
              <option data-testid="reservation-time-option" key={times}>
                {times}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <FormField
        label="Number of guests"
        htmlFor="reservation-number-guests"
        hasError={!isNumberOfGuestsValid()}
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input
          type="number"
          id="reservation-number-guests"
          name="reservation-number-guests"
          value={numberOfGuests}
          min={minimumNumberOfGuests}
          max={maximumNumberOfGuests}
          required={true}
          aria-required="true"
          aria-invalid={!isNumberOfGuestsValid()}
          aria-describedby="reservation-number-guests-error"
          onChange={(e) => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField
        label="Occasion"
        htmlFor="reservation-occasion"
        hasError={!isOccasionValid()}
        errorMessage={invalidOccasionErrorMessage}
      >
        <div className="select-wrapper">
          <select
            id="reservation-occasion"
            name="reservation-occasion"
            value={occasion}
            required={true}
            aria-required="true"
            aria-invalid={!isOccasionValid()}
            aria-describedby="reservation-occasion-error"
            onChange={(e) => setOccasion(e.target.value)}
          >
            {occasions.map((occasion) => (
              <option data-testid="reservation-occasion-option" key={occasion}>
                {occasion}
              </option>
            ))}
          </select>
        </div>
      </FormField>
      <button
        className="button-primary"
        type="submit"
        disabled={!areAllFieldsValid()}
        aria-label="On Click"
      >
        Reserve now!
      </button>
    </form>
  );
};

export default ReservationForm;
