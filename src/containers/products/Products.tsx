import { useState } from 'react'
import Listar from '../../components/listar/Listar';
import FormularioCreacion from '../../components/formularioCreacion/FormularioCreacion';
import ProductContext from '../../contexts/ProductContext'

// interface ProductModel{
//     products: [],
//     addProduct: (product: any) => {},
//     getProduct: (id: any) => {},
//     delProduct: (id: any) => {},
// }
interface ProductModel{
    id:number,
    name: string,
    price: number,
    stock: number,
}

const Products = () => {
    const [products, setProducts] = useState<any>([{
        id: 1,
        name: 'Platano',
        price: 500,
        stock:21
    }])

    const addProduct = (newProduct:any) => {
        const id = new Date().getTime()
        let aux = [...products];
        newProduct.id = id;
        aux.push(newProduct);
        setProducts(aux);
    }

    const delProduct = (id: number) => {

        let aux = products.filter((item : ProductModel) =>{
            return item.id !==id
        })
        setProducts(aux);
    }

    const getProduct = (id:number) => {
        let aux = products.filter((item:any)=>{return item.id === id})
        return aux;
    }

    const updateProduct = (data:ProductModel)=>{
        console.log(data);
        let newProdcs = products.map((item :ProductModel )=>{
            return item.id ===data.id? data: item
        })
        setProducts(newProdcs);
    }

    return (
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
            updateProduct
        }}>
            <div>
                <div className="col-6 mx-auto mb-5 ">
                <FormularioCreacion/>
                </div>
                <div className="col-12 px-5 ">
                <Listar />
                </div>
                
            </div>
        </ProductContext.Provider>
    )
}

export default Products
