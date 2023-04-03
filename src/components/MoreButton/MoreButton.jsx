import "./MoreButton.css";

const MoreButton = ({ status, onClick }) => {
  return (
    <section className="more-button">
      <button
        className={`button more-button__button${status}`}
        onClick={onClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default MoreButton;
