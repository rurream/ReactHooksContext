import FormUpdate from '../../components/formUpdate/FormUpdate';
import styles from './Detalle.module.css';

interface ProductModel {
    name: string,
    price: number,
    stock: number,
    id: number
}

const Detalle = ({ name, price, stock, id }: ProductModel) => {
    // , handler:any

    return (
        <div>
            {
                <div>
                    <div className={styles.detalleCont}>
                        <p>Nombre: {name} </p>
                        <p>Precio: ${price}</p>
                        <p>Cantidad: ${stock}</p>
                    </div>
                    <hr />
                    <div>
                        <h5>Modificar Producto</h5>
                        <FormUpdate name={name} price={price} stock={stock} id={id} />
                        {/* handler={handler} */}
                    </div>
                </div>

            }
        </div>
    )
}

export default Detalle