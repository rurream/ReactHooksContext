import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import ProductContext from "../../contexts/ProductContext";
import styles from './Remove.module.css';

const Remove = () => {
    const {getProductById,handlerOnDelete} = useContext(ProductContext)
    const {id}  = useParams<any>()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] =useState(0);
    const history = useHistory()

    useEffect(() => {
        if(getProductById(id)){
            const {name, price, stock} = getProductById(id)  
        setName(name)
        setPrice(price)
        setStock(stock)
        }
        
    }, [name,price,id, stock])

    const handlerOnConfirm=()=>{
        handlerOnDelete(id)
        history.push('/list')
    }

    return (
        <div className={styles.detalleCont}>
           <p className="bg-warning p-2 text-center">Estas seguro que deseas borrar el producto?</p>
           <div>id: {id}</div> 
           <div>name: {name}</div> 
           <div>price: {price}</div> 
           <div>stock: {stock}</div> 
           <button className="btn btn-danger my-3" onClick={e=>handlerOnConfirm()} >Borrar</button>
        </div>
    )
}

export default Remove