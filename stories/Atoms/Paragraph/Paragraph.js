import { html } from 'lit';
import './p.css';

export const p = ({ label }) => {

return html ` 
<p>${label || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vulputate eros nec nulla fringilla, at sollicitudin libero feugiat. Nunc diam est, lobortis nec pulvinar id, sodales volutpat nibh. Sed lobortis nulla vitae libero vehicula, eget pharetra nulla auctor. Proin sit amet dui ac dolor mollis convallis. Cras vestibulum felis vel semper laoreet. Quisque varius lacus et orci consectetur semper vel sit amet justo. Aenean mattis tortor vitae eros pulvinar, et dignissim nisl efficitur. Duis et semper ante, sed rhoncus arcu. Duis rhoncus mi turpis, et iaculis enim blandit ut. Etiam suscipit vulputate maximus. '}</p>
`;

};