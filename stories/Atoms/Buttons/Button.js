import { html } from 'lit';
import './buttons.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, buttonType }) => {

  return html`
    <a class=${['btn', `${buttonType || 'btn--primary'}`].join(' ')} href="#">${label}</a>
  `;
};
