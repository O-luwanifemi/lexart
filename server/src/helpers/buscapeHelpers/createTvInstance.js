import response from '../response.js';

async function createTvInstance(res, element) {
    try {
        const photo = element.querySelector('a.cardImage > img.image').src;
        const description = element.querySelector(
            'div.cardBody h2.name > a'
        ).textContent;
        const name = description.trim().split(' ')[4];
        let category = 'television';
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

export default createTvInstance;
