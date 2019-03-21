import * as React from "react";
import { ReactNode } from "react";
import { connect } from "react-redux";

import CardElement from "../../components/CardElement";
import { showModal } from "../../actions/modals";

interface ActiveCardElementProps {
  name: string;
  value: string;
  element: ReactNode;
  showModal: Function;
}

const ActiveCardElement = (props: ActiveCardElementProps) => (
  <div
    className="card_body_element_active"
    onClick={() => {
      console.log(props);
      props.showModal(props.element);
    }}
  >
    <CardElement name={props.name} value={props.value} />
  </div>
);

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    showModal: (element: ReactNode) => dispatch(showModal(element))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveCardElement);
