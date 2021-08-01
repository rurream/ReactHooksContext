import { useContext, useEffect, useRef, useState } from "react"
import ProductContext from "../../contexts/ProductContext"
import Detalle from '../detalle/Detalle'
import styles from './Listar.module.css';
import { Modal, Button } from 'react-bootstrap'
import { Link } from "react-router-dom";

interface ProductModel {
    name: string,
    price: number,
    stock: number,
    id: number
}

const Listar = () => {
    const context = useContext(ProductContext);
    const [showModal, setShowModal] = useState(false);
    const [productDetail, setProductDetail] = useState({ name: '', price: 0, stock: 0, id: 0 });

    const showDetail = (productoMostrar: ProductModel) => {
        setProductDetail(productoMostrar);
    }
    const handlerModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div className={styles.table}>
            <div className="card-body">
                <table className="table">
                    <thead>
                        <tr>
                            <td>Producto</td>
                            <td>Precio (CLP)</td>
                            <td>Cantidad</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody >
                        {context.products.map((product: any) => (


                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Button className="btn btn-sm btn-danger py-0" onClick={() => context.handlerOnDelete(product.id)}>Remover</Button>
                                </td>
                                <td>
                                    <Button className="btn btn-sm btn-warning py-0" onClick={() => { showDetail(product); handlerModal() }}>Detalle</Button>
                                </td>
                                <td>
                                    <Link to={`detail/${product.id}`} >
                                        <Button className="btn btn-sm btn-info py-0" >go-Detail</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`remove/${product.id}`} >
                                        <Button className="btn btn-sm btn-info py-0" >go-Remove</Button>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`edit/${product.id}`} >
                                        <Button className="btn btn-sm btn-info py-0" onClick={() => { showDetail(product); handlerModal() }}>go-Update</Button>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* <!-- Modal --> */}
            </div>
            <Modal show={showModal} onHide={() => handlerModal()}>
                <Modal.Header closeButton>Detalle de Producto (#{productDetail.id})</Modal.Header>
                <Modal.Body>
                    <Detalle name={productDetail.name} price={productDetail.price} stock={productDetail.stock} id={productDetail.id} /></Modal.Body>
                {/* handler={handlerModal} */}
                <Modal.Footer>
                    <Button onClick={() => handlerModal()}>Ok</Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}

export default Listar
