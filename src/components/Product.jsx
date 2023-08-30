import { useContext } from 'react'
import '../style/Product.css'
import { Link } from 'react-router-dom'
import Mycontext from '../context/context'
const Product = () => {
    const details = useContext(Mycontext);
    return (
        <div className='product'>
            {
                details.map((productsData, index) => {
                    return (
                        <div className='card' key={index}>
                            <Link to={`/product/${productsData._id}`}>
                                <img src={productsData.src} alt="" />
                            </Link>

                            <h3>
                                <Link to={`/product/${productsData._id}`}>
                                    <a href="">{productsData.title}</a>
                                </Link>

                            </h3>
                            <span>{productsData.price}</span>
                            <p>{productsData.description}</p>
                            <button onClick={() => addToCart(productsData)}>Add to card</button>
                        </div>
                    )

                })
            }
        </div>
    )
}

export default Product