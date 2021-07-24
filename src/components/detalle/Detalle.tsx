

interface ProductModel{
    name: string,
    price: number
}

const Detalle = ({name, price}: ProductModel) => {

    return (
        <div>
        {
            <p>Nombre: {name} , Precio: ${price}</p>
        }
        </div>
    )
}

export default Detalle