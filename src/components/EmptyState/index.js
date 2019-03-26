import React from "react";
// import { Link } from 'react-router-dom';

import "./empty-state.scss";

const EmptyState = ({
  leadingText,
  buttonText,
  redirectLink,
  onClick = () => {},
  height,
  margin,
  ...others
}) => (
  <div className="empty-state" style={{ height, margin }} {...others}>
    <div className="empty-state__img">
      <img src={`/unavailable.svg`} alt={leadingText} />
    </div>
    <div className="empty-state__description">
      <p>{leadingText}</p>
    </div>
    <section className="empty-state__button-area">
      {redirectLink ? (
        <a href={redirectLink} className="btn close_button">
          {buttonText}
        </a>
      ) : (
        buttonText && (
          <button onClick={onClick} className="btn close_button" type="button">
            {buttonText}
          </button>
        )
      )}
    </section>
  </div>
);

export default EmptyState;
