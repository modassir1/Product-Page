import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Mycontext from '../context/context';
import '../style/SingleProduct.css'
const SingleProduct = () => {
    const { id } = useParams();
    const singleDataId = useContext(Mycontext);
    const getSingleProduct = singleDataId.filter((data) => data._id === id);
    return (
        <>
            {
                getSingleProduct.map((item) => {
                    return (
                        <div className="details" key={item._id}>
                            <img src={item.src} alt="" />
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>&#8377;{item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <button className='.card'>Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default SingleProduct