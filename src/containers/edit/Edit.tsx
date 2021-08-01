import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import FormUpdate from '../../components/formUpdate/FormUpdate';
import ProductContext from '../../contexts/ProductContext';


const Edit = () => {
    const {getProductById, handlerOnUpdate} = useContext(ProductContext)
    const {id} = useParams<any>()
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [stock, setStock] =useState(0);
    // const history = useHistory()

    useEffect(() => {
        const { name, price, stock } = getProductById(id) 
        setName(name)
        setPrice(price)
        setStock(stock)
    }, [name,price,id, stock])


    return (
        <>
         {name&&price&&stock&&<FormUpdate id={id} name={name} price={price} stock={stock}/>}   
        </>
    )
}

export default Edit