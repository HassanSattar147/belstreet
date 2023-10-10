import React from "react";
import { createPortal } from "react-dom";
import "../../styles/elements.css";

export type GenericElements =
  | React.ReactElement
  | React.ReactElement[]
  | React.ReactNode
  | React.ReactNode[]
  | JSX.Element
  | JSX.Element[];

const Modal = ({
  isOpen,
  onClose,
  children,
  hideCloseBtn = false,
  isCloseable = true,
}: {
  isOpen: boolean;
  onClose: React.MouseEventHandler<HTMLDivElement>;
  children: GenericElements;
  hideCloseBtn?: boolean;
  isCloseable?: boolean;
}) => {
  if (!isOpen) return null;

  const modalRoot = document.getElementById("modal-root");

  if (modalRoot === null) return;

  const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (typeof isCloseable === "boolean" && isCloseable) onClose(e);
  };

  return createPortal(
    <div className="modal">
      <div className="modal__overlay" onClick={handleClose} />
      <div className="modal__content">
        {hideCloseBtn ? (
          ""
        ) : (
          <div className="modal__content__cross-btn" onClick={handleClose} />
        )}
        <div className="modal__content__wrapper">{children}</div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
