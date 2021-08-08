import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card/card';
import Header from '../components/header/header';
import { getBuscape } from '../apis/buscapeApis';
import { getMercado } from '../apis/mercadoApis';
import {
    getProductsAsync,
    saveProductsAsync
} from '../redux/actions/storeActions';
import setEndPoint from '../utils/setEndpoint';
import getSearchedInput from '../utils/getSearchedInput';

const Home = () => {
    // Handles dropdown menus and search input states
    const [stateValues, setStateValues] = useState({
        categorySelect: 'Categories',
        siteSelect: 'Site',
        searchInputValue: ''
    });

    // Handles search history fetched from store
    const [searchHistory, setSearchHistory] = useState([]);

    // Stores search results rendered on UI
    const [searchedProducts, setSearchedProducts] = useState([]);

    const dispatch = useDispatch();

    // Updates store on component load
    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    // Updates component with product updates from store
    const { data: storeProducts } = useSelector(
        state => state.productsStore || []
    );

    const handleChange = event => {
        const { name, value } = event.target;
        setStateValues({ ...stateValues, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        event.stopPropagation();

        ///////////////////// TO HAVE LOADER SLOTTED IN HERE ///////////////////////
        console.log('IT HAS STARTED NOW!!!!');

        const { categorySelect, siteSelect, searchInputValue } = stateValues;

        if (categorySelect === 'Categories' || siteSelect === 'Site') {
            return alert('Please specify search category and site');
        }

        if (!searchInputValue) {
            return alert('Please type in your search word or phrase');
        }

        ////////////// IF NOTHING CAME FROM THE DATABASE TO STORE, I.E DB IS EMPTY /////////////
        if (!storeProducts.length) {
            const response =
                siteSelect === 'Mercado Livre'
                    ? await getMercado(setEndPoint(categorySelect))
                    : siteSelect === 'Buscape'
                    ? await getBuscape(setEndPoint(categorySelect))
                    : '';

            if (Object.keys(response).length) {
                const payload = getSearchedInput(response, searchInputValue);
                
                if (payload.length) {
                    // Sends payload to the DB, and store
                    dispatch(saveProductsAsync(payload));

                    // Updates component state for search History till component reloads
                    setSearchHistory([...searchHistory, ...payload]);

                    // Updates state component that renders results to the UI
                    return setSearchedProducts([...payload]);
                }

                return alert('Oops! Nothing to show. Sorry!');
            }
        }

        console.log('ARRAY', storeProducts);

        const payload = storeProducts.filter(
            product =>
                product.category === categorySelect &&
                product.description
                    .toLowerCase()
                    .includes(searchInputValue.toLowerCase())
        );

        if(payload.length) {
            // Updates component state for search History till component reloads
            setSearchHistory([...searchHistory, ...payload]);

            // Updates state component that renders results to the UI
            return setSearchedProducts([...payload]);
        }

        const response =
            siteSelect === 'Mercado Livre'
                ? await getMercado(setEndPoint(categorySelect))
                : siteSelect === 'Buscape'
                ? await getBuscape(setEndPoint(categorySelect))
                : '';

        if (Object.keys(response).length) {
            const payload = getSearchedInput(response, searchInputValue);
            
            if (payload.length) {
                // Sends payload to the DB, and store
                dispatch(saveProductsAsync(payload));

                // Updates component state for search History till component reloads
                setSearchHistory([...searchHistory, ...payload]);

                // Updates state component that renders results to the UI
                return setSearchedProducts([...payload]);
            }

            return alert('Oops! Nothing to show. Sorry!');
        }
    };
 
    return (
        <div className="main_block">
            <Header
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                selectedValue={stateValues}
            />

            <section>
                {searchedProducts.map(product => (
                    <Card
                        key={Math.random()}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        imgSrc={product.imgurl}
                    />
                ))}
            </section>
        </div>
    );
};

export default Home;
