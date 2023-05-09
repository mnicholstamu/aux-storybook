import { html } from 'lit';
import './quotes.css';

export const Quote = ({ quoteType, hasCite, length }) => {

    if (hasCite == true) {
        return html`
        <figure class=${[`${quoteType}`,`${quoteType}--has-cite`,`${length}`].join(' ')}>
        <blockquote class=${[`${quoteType}__content`]}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere reprehenderit delectus maiores amet, consequuntur temporibus dicta autem! Exercitationem aperiam quia unde consectetur magnam? Aliquam maiores veniam libero deleniti recusandae.
          </p>
        </blockquote>
        <figcaption class=${[`${quoteType}__cite`]}>
          <p class="name">Tim St. Martin</p>
          <p class="title">Assistant Vice President of Web & Digital Experience</p>
          <p class="org">Division of Marketing & Communications</p>
        </figcaption>
      </figure>
        `;
    }
    else {
        return html`
        <figure class=${[`${quoteType}`,`${length}`].join(' ')}>
        <blockquote class=${[`${quoteType}__content`]}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere reprehenderit delectus maiores amet, consequuntur temporibus dicta autem! Exercitationem aperiam quia unde consectetur magnam? Aliquam maiores veniam libero deleniti recusandae.
          </p>
        </blockquote>
      </figure>

        `;
    }





};





