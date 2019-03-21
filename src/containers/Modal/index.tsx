import * as React from "react";
import { ReactNode } from "react";
import { connect } from "react-redux";
import { hideModal } from "../../actions/modals";
import "./style.scss";

interface ModalProps {
  children: ReactNode;
  opened: number;
  hideModal: Function;
}

const Modal = (props: ModalProps) => {
  const close = () => props.hideModal();

  if (props.opened) {
    return (
      <div className="modal" onClick={() => close()}>
        {props.children}
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state: any) => {
  return {
    opened: state.modals.opened,
    children: state.modals.children
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
