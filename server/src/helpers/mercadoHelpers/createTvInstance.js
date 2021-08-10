import response from '../response.js';

async function createTvInstance(res, element) {
    try {
        // const photo = await element.querySelector('a .slick-slide > img').src;
        constphoto = 'https://i.zst.com.br/thumbs/45/2f/1a/1281934694.jpg';
        
        const description = await element.querySelector(
            'div.ui-search-result__content-wrapper h2.ui-search-item__title'
        ).textContent;
        const name = description.trim().split(' ')[2];
        let category = 'television';
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

export default createTvInstance;
