import useFetchGifs from '../hooks/useFetchGifs';
import GifItem from './GifItem';

const GifGrid = ({ category }) => {
    
    const { images, isLoading } = useFetchGifs ( category );
    
    
    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading   ? 
                                (<h2>Cargando...</h2>)
                            : null
            }
            <div className='card-grid'>
                {
                    images.map( ( iamge ) => (
                        <GifItem 
                            key={ iamge.id }
                            title={ iamge.title }
                            url={ iamge.url }
                        />
                    ))
                }
            </div>
        </>
    )
}

export default GifGrid