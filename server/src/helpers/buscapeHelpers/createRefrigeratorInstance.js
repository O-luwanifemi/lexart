import response from '../response.js';

async function createRefrigeratorInstance(res, element) {
    try {
        const photo = element.querySelector('a.cardImage > img.image').src;
        const description = element.querySelector(
            'div.cardBody h2.name > a'
        ).textContent;
        const array = description.trim().split(' ');
        const name = array.slice(0, 2).join(' ');
        let category = 'refrigerator';
        const price = element.querySelector(
            'div.cardBody > .cardInfo .customValue'
        ).textContent;
        const website = 'buscape.com.br';

        return {
            name,
            category,
            description,
            price,
            source: website,
            imgurl: photo
        };
    } catch (error) {
        return response(res, 500, 'Failed', error.message);
    }
}

export default createRefrigeratorInstance;