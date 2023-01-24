import { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Goku Ultra Instinct' ])

    const onAddCategory = ( newCategory ) => {
        console.log( newCategory )

        if ( categories.includes(newCategory) ) return;
        // categories.push( newCategory )
        // setCategories([...categories, 'Valorant'])
        setCategories([ newCategory, ...categories ])
        
    }

    return (
        <>

            <h1>Gif Search App</h1>

            <AddCategory 
                onNewCategory={ onAddCategory }
                currentCategories={ categories } 
            />

                { 
                    categories.map( ( category ) => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    ))   
                }
        </>
    )
    };

