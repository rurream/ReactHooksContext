import { useContext } from "react"
import useInput from "../../hooks/useInput"
import ProducsContext from "../../contexts/ProductContext"

const Form = () => {
    const { products, addProduct } = useContext(ProducsContext)
    const [nameFruit, setNameFruit] = useInput('')
    const [cant, setCant] = useInput('')

    const handlerSubmit = (event: any) => {
        event.preventDefault();
        let aux = {
            name: nameFruit,
            price: cant,
        }
        // console.log(event.target);
        addProduct(aux)
    }

    const disabled = () => {
        return nameFruit === '' || isNaN(cant)
    }

    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <label>Nombre fruta</label>
                <input type="text" className="form-control" value={nameFruit} onChange={setNameFruit} />
                <label>Cantidad</label>
                <input type="number" className="form-control" value={cant} onChange={setCant} />
                <button className="btn btn-primary mt-2" disabled={disabled()}>Registrar</button>
            </form>
        </div>
    )
}

export default Form