import response from '../response.js';

async function createRefrigeratorInstance(res, element) {
    try {
        // const photo = await element.querySelector('a .slick-slide > img').src;
        const photo = 'https://i.zst.com.br/thumbs/51/33/12/1812981852.jpg';

        const description = await element.querySelector(
            'div.ui-search-result__content-wrapper h2.ui-search-item__title'
        ).textContent;
        const array = description.trim().split(' ');
        const name = `${array[0]} ${array[1]} ${array[2]}`;
        let category = 'refrigerator';
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

export default createRefrigeratorInstance;
