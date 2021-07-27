import { useContext } from "react";
import useInput from "../../hooks/useInput";
import ProducsContext from "../../contexts/ProductContext";

interface ProductModel{
    name: string,
    price: number,
    stock: number,
    id:number
}

const FormUdpate = ({name, price, stock, id}: ProductModel) => {
    // , handler:any
    const { products, updateProduct } = useContext(ProducsContext);
    const [nameFruit, setNameFruit] = useInput(name);
    const [cant, setCant] = useInput(stock + '');
    const [priceFruit, setPrice] = useInput(price + '');

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        let aux = {
            name: nameFruit,
            stock: parseInt(cant) ,
            price: parseInt(priceFruit) ,
            id:id
        }
       
        updateProduct(aux);
        
    }

    const disabled = () => {
        return nameFruit === '' || isNaN(cant);
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label className="small">Nombre fruta</label>
                <input type="text" className="form-control py-0 mb-1" value={nameFruit} onChange={setNameFruit} />
                <label className="small">Cantidad</label>
                <input type="number" className="form-control py-0 mb-1" value={cant} onChange={setCant} />
                <label className="small">Precio</label>
                <input type="number" className="form-control py-0 mb-1" value={priceFruit} onChange={setPrice} />
                <button className="btn btn-primary mt-2 px-5" disabled={disabled()}>Registrar nuevo producto</button>
            </form>
        </div>
    )
}

export default FormUdpate