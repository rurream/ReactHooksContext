import { useContext } from "react";
import useInput from "../../hooks/useInput";
import ProductContext from "../../contexts/ProductContext";
import styles from './Create.module.css';

const Create = () => {
    const { products, handlerOnAdd } = useContext(ProductContext);
    const [nameFruit, setNameFruit] = useInput('');
    const [cant, setCant] = useInput('');
    const [price, setPrice] = useInput('');

    const validarText = (text:string)=>{
        return text.trim().length > 0? true:false;
    }

    const validarNumber = (num:any)=>{console.log(num);
        return isNaN(num) || num < 0 || num == '' ? false : true;
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault();

        if(validarText(nameFruit) && validarNumber(cant) && validarNumber(price)){
            let aux = {
                id: new Date().getTime(),
                name: nameFruit,
                stock: cant,
                price: price,
            }
            
            handlerOnAdd(aux);
        }else{
            console.log("Error, los datos no son válidos");
        }
        
    }

    const disabled = () => {
        return nameFruit.trim() === '' || isNaN(cant) || cant == '' || isNaN(price) || price == '';
    }

    return (
        <div className="mt-5" >
            <form onSubmit={handlerSubmit} className={styles.form}>
                <label className="small">Nombre fruta</label>
                <input type="text" className="form-control py-0 mb-1" value={nameFruit} onChange={setNameFruit} />
                <label className="small">Cantidad</label>
                <input type="number" className="form-control py-0 mb-1" value={cant} onChange={setCant} />
                <label className="small">Precio</label>
                <input type="number" className="form-control py-0 mb-1" value={price} onChange={setPrice} />
                <button className="btn btn-primary mt-2 px-5" disabled={disabled()}>Registrar nuevo producto</button>
            </form>
        </div>
    )
}

export default Create