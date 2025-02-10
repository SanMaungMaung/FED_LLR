import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const ConfirmedReservation = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  const generateReservationID = () => {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
  };

  const reservationID = generateReservationID();

  return (
    <div className="container confirmed-reservation">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your table has been reserved!</h2>
      <p>
        Your reservation ID is:{" "}
        <span style={{ color: "#EE9972", fontWeight: "bold" }}>{reservationID}</span>
      </p>
      <p>You'll receive a confirmation email with all the details.</p>
      <button
        className="button-primary"
        onClick={handleGoHome}
        style={{ marginTop: "20px" }}
      >
        Go Home
      </button>
    </div>
  );
};

export default ConfirmedReservation;
