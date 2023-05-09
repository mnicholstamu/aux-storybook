import { html } from 'lit';
import './links.css';

export const link = ({ linkType, label }) => {

return html ` 
<a class=${['link', `${linkType}`].join(' ')} href="#">${label || 'This is a link'}</a>
`;

};