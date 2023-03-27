import "./DeleteButton.css";

const DeleteButton = ({ card, deleteMyCard }) => {
  const handleClick = () => {
    deleteMyCard(card);
  };

  return <button className="delete-button" onClick={handleClick}></button>;
};

export default DeleteButton;
