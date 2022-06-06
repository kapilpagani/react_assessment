import React from "react";

export default function CardList(props) {
  //   const [cardData, setCardData] = useState({
  //     cardHolderName: "kapil Pagani",
  //     cardNumber: "4567897657678",
  //     valid: "03/12",
  //     cardId: 1,
  //   });

  const { data: cardData } = props;

  const { cardHolderName, cardNumber, validThrou, cardId } = cardData;
  return (
    <div>
      {" "}
      <div className="list-container">
        <div className="card-item1">
          <div>{cardHolderName}</div>
          <div>{cardNumber}</div>
        </div>
        <div className="card-item2">
          <div></div>
          <div>{validThrou}</div>
        </div>
        <div className="card-item3">
          <div>
            <button
              onClick={() => props.handleDelete(cardId)}
              className="deleteButton"
            >
              Delete
            </button>
          </div>
          <div>
            <button
              onClick={() => props.handleEdit(cardId)}
              className="editButton"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
