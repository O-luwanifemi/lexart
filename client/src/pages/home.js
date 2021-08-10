import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../components/card/card';
import Loader from '../components/loader/loader';
import Header from '../components/header/header';
import { getProductsAsync } from '../redux/actions/storeActions';
import processResponse from '../utils/processResponse';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    // Handles dropdown menus and search input states
    const [stateValues, setStateValues] = useState({
        categorySelect: 'Categories',
        siteSelect: 'Site',
        searchInputValue: ''
    });

    // Stores CURRENT search results rendered on UI
    const [searchedProducts, setSearchedProducts] = useState([]);

    const dispatch = useDispatch();

    // Gets products from DB, and keeps in store
    useEffect(() => {
        dispatch(getProductsAsync());
    }, [dispatch]);

    // Updates component with product updates from store
    const { data: storeProducts } = useSelector(
        state => state.productsStore || []
    );

    const handleChange = event => {
        event.preventDefault();
        event.stopPropagation();

        const { name, value } = event.target;
        setStateValues({ ...stateValues, [name]: value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        event.stopPropagation();

        const { categorySelect, siteSelect, searchInputValue } = stateValues;

        if (categorySelect === 'Categories' || siteSelect === 'Site') {
            return alert('Please specify search category and site');
        }

        if (!searchInputValue) {
            return alert('Please type in your search word or phrase');
        }

        ///////////////////// TO HAVE LOADER SLOTTED IN HERE ///////////////////////
        setIsLoading(true);

        ////////////// IF NOTHING CAME FROM THE DATABASE TO STORE, I.E DB IS EMPTY /////////////
        if (!storeProducts.length) {
            const res = await processResponse(
                siteSelect,
                categorySelect,
                searchInputValue,
                dispatch,
                setSearchedProducts
            );
            setIsLoading(false);
            return res;
        }

        ////////////// IF SOMETHING CAME FROM THE DATABASE TO STORE, Check through DB products first
        const payload = storeProducts.filter(product => {
            if (categorySelect === 'TV') {
                return (
                    product.category === 'television' &&
                    product.source.includes(siteSelect.toLowerCase()) &&
                    product.description
                        .toLowerCase()
                        .includes(searchInputValue.toLowerCase())
                );
            }

            return (
                product.category === categorySelect.toLowerCase() &&
                product.source.includes(siteSelect.toLowerCase()) &&
                product.description
                    .toLowerCase()
                    .includes(searchInputValue.toLowerCase())
            );
        });

        if (payload.length) {
            setTimeout(() => {
                setIsLoading(false);
                // Updates state component that renders results to the UI
                return setSearchedProducts([...payload]);
            }, 2000)
        } else {
            // If filter returned no match
            const res = await processResponse(
                siteSelect,
                categorySelect,
                searchInputValue,
                dispatch,
                setSearchedProducts
            );
            setIsLoading(false);
            return res;
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
                {isLoading ? (
                    <Loader />
                ) : (
                    searchedProducts.map(product => (
                        <Card
                            key={Math.random()}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imgSrc={product.imgurl}
                            category={product.category}
                            source={product.source}
                        />
                    ))
                )}
            </section>
        </div>
    );
};

export default Home;
