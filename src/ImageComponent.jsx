import { useEffect, useState } from 'react';
import axios from 'axios';

function ImageComponent() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async () => {
            // const token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyb3V2c2VuQGdtYWlsLmNvbSIsImlhdCI6MTY5NTE0ODI4OSwiZXhwIjoxNjk1MTUwMDg5fQ.9Hz79zwrjRiBF_tJVWZb7WYnExPhQHSn1LhS9tn2x3U"; //Get Token from Admin (Moderator)
            // const config = {
            //     headers: {
            //         Authorization: `Bearer ${token}`,
            //     },
            // };
            const res = await axios.get("http://127.0.0.1:8090/api/products/all"); //, config #inside of axios if you should use jwt, like axios.get("url", config)
            const data = res.data;
            console.log(data);
            setProducts(data);
        })();
    }, []);

    return (
        <div>
            {products.map(product => (
                <div style={{border: "2px solid black", margin: "15px", padding: "10px"}} key={product.id}>
                    <h3>Product Name: {product.name}</h3>
                    <p>Product Material: {product.material}</p>
                    <p>Product Price: {product.price}</p>
                </div>
            ))}
        </div>
    )

}

export default ImageComponent;