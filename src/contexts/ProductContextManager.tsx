import React, { useState } from "react";
import ProductContext from "./ProductContext";

interface Props {
  children: JSX.Element;
}

interface ProductModel {
  name: string,
  price: number,
  stock: number,
  id: number
}

const ProductContextManager = ({ children }: Props) => {
  const productos = [
    {
      id: 1,
      name: "Papaya",
      price: 100,
      stock: 50
    },
    {
      id: 2,
      name: "Pera",
      price: 50,
      stock: 85
    },
  ];
  const [products, setProductos] = useState<ProductModel[]>(productos);
  const handlerOnAdd = (newProducto: any) => {
    setProductos([...products, newProducto]);
  };
  const handlerOnDelete = (id: any) => {
    const remaining = products.filter((producto:any)=>producto.id!=id)
    setProductos(remaining);
  };
  const getProductById = (id: any) => {
    return products.find((producto)=>producto.id==id)
  };

  const handlerOnUpdate = (product:any)=>{
    const p = products.map((producto:any)=>{ 
      if (producto.id==product.id)
        return product
      else
        return producto
    })
    setProductos(p)
  }

  return (
    <div>
      <ProductContext.Provider value={{ handlerOnAdd,handlerOnDelete,getProductById,handlerOnUpdate, products }}>
        {children}
      </ProductContext.Provider>
    </div>
  );
};

export default ProductContextManager;
