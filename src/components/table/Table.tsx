import { useContext } from "react"
import ProductContext from "../../contexts/ProductContext"
import Detalle from '../detalle/Detalle'
import styles from './table.module.css';

// interface ProductModel{
//     name: string,
// }

const Table = () => {
    const context = useContext(ProductContext);

    const showDetail = (id: any) => {
        // console.log(id);
        // let details = document.querySelectorAll('.detalle');
        // details.forEach(element => {
        //     element.classList.remove('detalleShown')
        // });
        // let selected = document.getElementById(id + "");
        // // selected?<div className="classList add"></div>
        // if (selected) {
        //     selected.classList.add('detalleShown')
        // }

    }

    return (
        <div className={styles.table}>
            <div className="card-body">
                <table className="table">
                    <tbody >
                        {context.products.map((product: any) => (


                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                {/* <td>
                                <button className="btn btn-sm btn-danger" onClick={() => context.addProduct(product.id)}>Agregar Unidad</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => context.delProduct(product.id)}>Restar Unidad</button>
                            </td> */
                                    <td>
                                        <button className="btn btn-sm btn-danger" onClick={() => context.delProduct(product.id)}>Remover</button>
                                    </td>
                                }
                                {
                                    <td>
                                        <button className="btn btn-sm btn-danger " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => showDetail(product)}>Detalle</button>
                                    </td>
                                }
                                {
                                    // <tr className="detalle detalleHidden" id={product.id}>
                                    //     <Detalle name={product.name} price={product.price} />
                                    // </tr>
                                }


                            </tr>

                        ))}

                    </tbody>
                </table>
                {/* <!-- Modal --> */}

            </div>

            {<div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>}
        </div>

    )
}

export default Table
