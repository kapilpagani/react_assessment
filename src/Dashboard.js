import React, { useState } from "react";
import CardList from "./CardList";
import CrediCardForm from "./CrediCardForm";
// import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  //   let navigate = useNavigate();
  const [cardData, setCardData] = useState([
    // {
    //   cardNumber: "",
    //   cardHolderName: "",
    //   validThrou: "",
    //   securityCodeCVV: "",
    //   cardId: "",
    // },
  ]);

  const [cardEditData, setCardEditData] = useState();
  const [editCard, setEditCard] = useState(false);

  const [addButton, setAddButton] = useState(false);

  const handleSubmit = (data) => {
    if (editCard) {
      const filteredData = cardData.filter((d, i) => {
        return d.cardId !== data.cardId;
      });

      const newData = [...filteredData, data];
      setCardData(newData);
    } else {
      const updatedData = { ...data, cardId: Math.random() };
      const newData = [...cardData, updatedData];
      setCardData(newData);
    }
    setEditCard(false);
    setAddButton(false);
  };

  const buttonClicked = () => {
    setAddButton(true);
  };

  const handleDelete = (id) => {
    console.log(id);
    const newData = cardData.filter((d, i) => {
      return d.cardId !== id;
    });
    setCardData(newData);
  };

  const handleEdit = (id) => {
    console.log(id);
    const newData = cardData.find((d, i) => {
      return d.cardId === id;
    });
    console.log(newData, "newData");
    setCardEditData(newData);
    setEditCard(true);
  };

  const handleBack = () => {
    setEditCard(false);
    setAddButton(false);
  };
  return (
    <div>
      {" "}
      {!addButton && (
        <>
          <div className="dashboard-container">
            <h1 className="heading">List of Credit Cards</h1>
            <button onClick={buttonClicked} className="adButton">
              +Add Credit Card
            </button>
            {cardData.map((data, index) => (
              <CardList
                data={data}
                key={index}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </>
      )}
      {addButton && (
        <CrediCardForm handleSubmit={handleSubmit} handleBack={handleBack} />
      )}
      {editCard && !addButton && (
        <CrediCardForm
          handleSubmit={handleSubmit}
          editCard
          cardData={cardEditData}
          handleBack={handleBack}
        />
      )}
    </div>
  );
}
