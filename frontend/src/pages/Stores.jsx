import React, { useState, useEffect } from "react";
import axios from 'axios';
import Spinner from '../components/spinner';
import BackButton from '../components/BackButton';

function Stores() {
    const [storesData, setStoresData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3001/stores')
            .then((response) => {
                console.log('Data from server:', response.data.foundStores);
                setStoresData(response.data.foundStores);
                setLoading(false);
            })
            .catch((error) => {
                console.log('Error fetching data', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Book Stores</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    {storesData.map((store, index) => (
                        <div key={index} className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 my-4'>
                            <div className='my-4'>
                                <span className='text-xl mr-4 text-fgray-500'>Store Name</span>
                                <span>{store.store_name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Stores;
