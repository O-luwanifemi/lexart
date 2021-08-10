import fs from 'fs';
import base64 from 'base-64';
// import Buffer from 'buffer';
import response from '../response.js';

async function createPhoneInstance(res, element) {
    try {
        // const photo = element.querySelector('a .slick-slide > img').src;
        // const encodedString = photo.split('base64,')[1];
        // const buff = Buffer.from(encodedString, 'base64');
        // const url = buff.toString('utf-8');
        const photo = 'https://i.zst.com.br/thumbs/45/f/15/1143445227.jpg';

        const description = element.querySelector(
            'div.ui-search-result__content-wrapper h2.ui-search-item__title'
        ).textContent;
        const name = description.trim().split(' ')[0];
        let category = 'mobile';
        const price = await element.querySelector(
            'span.price-tag-amount .price-tag-fraction'
        ).textContent;
        const website = 'mercadolivre.com.br';

        return {
            name,
            category,
            description,
            price: 'R$ ' + price,
            source: website,
            imgurl: photo
        };
    } catch (error) {
        response(res, 500, 'Failed', error.message);
    }
}

export default createPhoneInstance;