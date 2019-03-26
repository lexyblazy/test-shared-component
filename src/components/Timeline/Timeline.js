import React from 'react';
import './timeline.scss';

export const Timeline = ({ children }) => (
  <ul className="stepper stepper-vertical">
    <h5>Order Status</h5>
    {children}
  </ul>
);

export const TimelineItem = ({
  completed = false,
  header,
  subtitle = '',
  meta,
  active = false,
  index = null,
}) => (
  <li className={`${completed ? 'completed' : ''}`}>
    <a href="/" onClick={ (e) => e.preventDefault() }>
      <span className="circle">
        {completed && <i className="mdi mdi-check-all" />}
        {active && `${index + 1}`}
      </span>
      <div className="details">
        <span className="label">
          {header} 
          <span className="order-track-date">{meta}</span>
        </span>
        {subtitle && (
          <div className="step-content">
            <p>{subtitle}</p>
          </div>
        )}
      </div>
    </a>
  </li>
);
