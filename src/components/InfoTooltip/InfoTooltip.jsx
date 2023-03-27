import "./InfoTooltip.css";

export const InfoTooltip = ({ isOpen, onClose, error, errorMessage }) => {
  return (
    <div className={`popup-info ${isOpen && "popup-info_opened"}`}>
      <div className="popup-info__container">
        <button
          className="button popup-info__button-close"
          type="button"
          onClick={onClose}
        ></button>
        <h2 className="popup-info__title">
          {errorMessage ? errorMessage : "Успешно!"}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
