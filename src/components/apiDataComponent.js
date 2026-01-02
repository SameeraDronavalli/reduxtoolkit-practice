
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { apiData } from "../features/products/apiproductsSlice";
function ApiDataComponent() {
    const { status, error } = useSelector((state) => state.apiProducts);
    const myData = useSelector(state => state.apiProducts.data.products)
    // check the process correctly
    console.log("loading:", status);
    console.log("error:", error);
    console.log("my show Data:", myData);
    
    const dispatch = useDispatch();
    useEffect(
        () => {
            dispatch((apiData()))
        }, [dispatch])
    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error: {error}</p>;
    return (
        <>
            <div className="container">
                <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" style={ { width: "100%", height: "300px", display: "block", marginBottom: "20px" }} />
                <h3 style={{ marginBottom: "30px", marginTop: "30px" }}>Quality Products, Fabulous Choices!</h3>
                <div className="row">
                    {myData?.map(product => (
                        <div className="col-3" key={product.id}>

                            <div className="card" style={{ marginTop: "30px", width: "12rem", border: "none", backgroundColor: "#f4f0ec" }}>
                                <img src={product.thumbnail} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">₹{product.price}</h5>
                                    <a href="#" className="btn btn-danger" > 👜 Add to Bag </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default ApiDataComponent;