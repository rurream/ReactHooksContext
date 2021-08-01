import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductContext from '../../contexts/ProductContext';
import styles from './Detail.module.css';

function Detail() {
    const { getProductById, handlerOnUpdate } = useContext(ProductContext)
    const { id } = useParams<any>()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0);

    useEffect(() => {
        if (getProductById(id)) {
            const { name, price, stock } = getProductById(id)
            setName(name)
            setPrice(price)
            setStock(stock)
        }

    }, [name, price, id, stock])

    return (
        <div>
            <div className={styles.detalleCont}>
                <p>Nombre: {name} </p>
                <p>Precio: ${price}</p>
                <p>Cantidad: {stock}</p>
            </div>
            
        </div>
    )
}

export default Detail
