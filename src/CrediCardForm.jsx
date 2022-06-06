import React, { useState } from "react";
import Form from "@rjsf/material-ui";
import { useEffect } from "react";

export default function CrediCardForm(props) {
  const [formData, setCardData] = useState({
    cardNumber: "",
    cardHolderName: "",
    validThrou: "",
    securityCodeCVV: "",
  });

  useEffect(() => {
    const { cardData } = props;
    setCardData((prevState) => ({
      ...prevState,
      cardNumber: cardData?.cardNumber,
      cardHolderName: cardData?.cardHolderName,
      validThrou: cardData?.validThrou,
      securityCodeCVV: cardData?.securityCodeCVV,
      cardId: cardData?.cardId,
    }));
  }, [props?.cardData]);
  const schema = {
    title: "Credit Card",
    type: "object",
    required: ["cardNumber", "cardHolderName", "validThrou", "securityCodeCVV"],
    properties: {
      cardNumber: {
        type: "string",
      },
      cardHolderName: {
        type: "string",
      },
      validThrou: {
        type: "string",
      },
      securityCodeCVV: {
        type: "string",
      },
    },
  };

  const handleSubmit = () => {
    console.log(formData);
    props.handleSubmit(formData);
  };
  return (
    <div className="form-container">
      {" "}
      <Form
        schema={schema}
        formData={formData}
        onChange={(e) => setCardData(e.formData)}
        onSubmit={() => handleSubmit()}
      />
    </div>
  );
}
