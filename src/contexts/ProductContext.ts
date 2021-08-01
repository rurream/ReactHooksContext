import { createContext } from 'react'

const ProductContext = createContext({
    products: [{ id: 0, name: "", price: 0, stock: 0 }],
    handlerOnAdd: (product: any) => {},
    getProductById: (id: any) => <any>({}),
    handlerOnDelete: (id: any) => {},
    handlerOnUpdate:(product: any)=>{}
});


    

export default ProductContext;