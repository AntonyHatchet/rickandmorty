import * as React from "react";

interface CardElementProps {
  name: string;
  value: string;
}

const CardElement = (props: CardElementProps) => (
  <div className="card_body_element">
    <span>{props.name}</span>
    <span>{props.value}</span>
  </div>
);

export default CardElement;
