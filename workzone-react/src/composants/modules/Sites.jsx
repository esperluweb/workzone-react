import { useEffect, useState } from 'react';
import '../../assets/css/Sites.css'
import Site from './Site';

function Sites() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/src/assets/data/sites.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
        
    

    if (error) {
        return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Chargement...</div>;
    } else {
        return (
            <section className="sites">
                <div>
                    {items.map(item => (
                        <Site key={item.id} name={item.name} folder={item.folder} wordpress={item.wordpress} />
                    ))}
                </div>
            </section>
        );
    }
}

export default Sites