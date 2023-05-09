import { html } from 'lit';
import './dividers.css';
import ThumbsUp  from '../../assets/thumbs-up-solid.svg';
/**
 * Primary UI component for user interaction
 */
export const DecorativeDividers = ({ dividerType, short }) => {
  const mode = short ? `${dividerType+'__short'}` : dividerType;

  return html`
    <span class=${[mode].join(' ')}></span>
  `;
};

export const HeadingDivider = ({short, headingText }) => {
  const mode = short ? `${'divider'+'__short'}` : 'divider';

  return html`
    <h2 class=${[mode].join(' ')}>${headingText}</h2>
  `;
};


export const IconDivider = ({short, icon }) => {
  const mode = short ? `${'divider'+'__short'}` : 'divider';

  const staticIcon = { src: ThumbsUp };
  
  return html`
    <span class=${[mode].join(' ')}><img src="${ icon || staticIcon.src }" alt="" role="presentation" /></span>
  `;
};
