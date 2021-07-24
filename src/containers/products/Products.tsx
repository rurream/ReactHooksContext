import { useState } from 'react'
import Table from '../../components/table/Table';
import Form from '../../components/form/Form';
import ProductContext from '../../contexts/ProductContext'

interface ProductModel{
    products: [],
    addProduct: (product: any) => {},
    getProduct: (id: any) => {},
    delProduct: (id: any) => {},
}

const Products = () => {
    const [products, setProduct] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
    }])

    const addProduct = (newProduct:any) => {
        const id = new Date().getTime()
        let aux = [...products];
        newProduct.id = id;
        aux.push(newProduct);
        setProduct(aux);
    }

    const delProduct = (id: any) => {
        console.log(`delete ${id}`);
        let aux2 = [...products];
        let aux = aux2.findIndex((item:any)=>{
            console.log(item);
            return item.id === id})
        console.log(aux);
        if(aux > -1){
            
            // let aux3 = aux2.splice(aux, 1)
            console.log(aux2.splice(aux, 1));
            console.log(aux2);
        setProduct(aux2);
        }else{
            console.log("No encontrado");
        }
        
    }

    const getProduct = (id:any) => {
        let aux = products.filter((item:any)=>{return item.id === id})
        return aux;
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="col-12 col-sm-6 offset-sm-3 ">
                <Form/>
                <Table />
            </div>
        </ProductContext.Provider>
    )
}

export default Products
