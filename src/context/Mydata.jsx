import React, { useState } from 'react'
import data from './context'
const Mydata = (props) => {
    const state = [
        {
            "_id": "1",
            "title": "Nike Air Force 1 '07",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80f02bc9-cb89-4fac-960e-d21849b5cbfd/rival-fly-3-road-racing-shoes-XbhTCL.png",
            "description": "Front End Developer",
            "content": "I work as a full stack developer. i started learing development in 2022.",
            "price": "$20",
        },
        {
            "_id": "2",
            "description": "Front End Developer",
            "title": "Nike Dunk Low Retro",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c019b96-78f2-4df6-9c9a-78b6b509899b/air-more-uptempo-96-shoes-sQs1FD.png",
            "content": "I work as a full stack developer. i started learing development in 2022.",
            "price": "$15",
           
        },
        {
            "_id": "3",
            "description": "Front End Developer",
            "title": "Nike Air Max 1",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f5256a3-de76-4696-89c2-e97a412c7957/air-force-1-07-shoes-VWCc04.png",
            "price": "$19",
            "content": "I work as a full stack developer. i started learing development in 2022."
        },
        {
            "_id": "4",
            "description": "Front End Developer",
            "title": "Nike Air Max 1 '86 OG G",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/80f02bc9-cb89-4fac-960e-d21849b5cbfd/rival-fly-3-road-racing-shoes-XbhTCL.png",
            "price": "$87",
            "content": "I work as a full stack developer. i started learing development in 2022.",
            
        },
        {
            "_id": "5",
            "title": "Nike Metcon 9 AMP",
            "description": "Front End Developer",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8c019b96-78f2-4df6-9c9a-78b6b509899b/air-more-uptempo-96-shoes-sQs1FD.png",
            "price": "$25",
            "content": "I work as a full stack developer. i started learing development in 2022.",

            
        },
        {
            "_id": "6",
            "title": "Giannis Immortality 3 EP",
            "description": "Front End Developer",
            "src": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0f5256a3-de76-4696-89c2-e97a412c7957/air-force-1-07-shoes-VWCc04.png",
            "price": "$30",
            "content": "I work as a full stack developer. i started learing development in 2022.",

         
        }
    ]
    return (
        <data.Provider value={state}>
            {props.children}
        </data.Provider>
    )
}

export default Mydata