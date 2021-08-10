import { getBuscape } from '../apis/buscapeApis';
import { getMercado } from '../apis/mercadoApis';
import { saveProductsAsync } from '../redux/actions/storeActions';
import getSearchedInput from './getSearchedInput';
import setEndPoint from './setEndpoint';

const processResponse = async (
    siteSelect,
    categorySelect,
    searchInputValue,
    dispatch,
    setSearchedProducts
) => {
    try {
        // Scrape the selected site
        const response =
            siteSelect === 'MercadoLivre'
                ? await getMercado(setEndPoint(categorySelect))
                : siteSelect === 'Buscape'
                ? await getBuscape(setEndPoint(categorySelect))
                : '';

        if (response && Object.keys(response).length) {
            // Filter for products matching specified search word
            const payload = getSearchedInput(response, searchInputValue);

            if (payload.length) {
                // Sends payload to the DB, and store
                dispatch(saveProductsAsync(payload));

                // Updates state component that renders results to the UI
                return setSearchedProducts([...payload]);
            }

            return alert('Oops! Nothing found. Try another search.');
        }

        return alert('Scraping failed; please retry!');
    } catch (error) {
        return error.message;
    }
};

export default processResponse;