import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CategoryCollectionCard from './CategoryCollectionCard/CategoryCollectionCard';

const CategoryCollection = () => {
 
    const CardData = useLoaderData();
    const {products} = CardData;
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-7'>
            {
                products?.map(items => <CategoryCollectionCard
                    key={items._id}
                    items={items}
                ></CategoryCollectionCard>)
            }
        </div>
    );
};

export default CategoryCollection;