import "./productssec.css";
import { ProductBox } from "./ProductBox";
import { useEffect, useRef } from "react";

import Spinner from "react-bootstrap/Spinner";
import useFetchProducts from "../../hooks/useFetchProducts";
import { baseUrl } from "../../clientApis/base";
import { Pagination } from "react-bootstrap";

function items(totalItems, itemsPerPage, pageNumber) {
    let itemsArr = [];
    let lastPageNumber = Math.ceil(totalItems / itemsPerPage);
    for (let number = 1; number <= lastPageNumber; number++) {
        itemsArr.push(
            <Pagination.Item
                key={number}
                active={number === pageNumber.current}
            >
                {number}
            </Pagination.Item>
        );
    }
    return itemsArr;
}

export default function ProductsSec() {
    // {count: 6, next: 'http://127.0.0.1:8000/api/v1/tools/products?p=2', previous: null, results: Array(3)}
    const { fetchProducts, response, loading, error } = useFetchProducts();
    let pageNumber = useRef(0);

    useEffect(() => {
        fetchProducts(`${baseUrl}/api/v1/tools/products`);
        pageNumber.current = 1;
    }, []);

    if (response) {
        return (
            <section className="product py-5" id="product">
                <div className="container">
                    <h2 className="fs-1 text-center mb-4">
                        Our <span> Products</span>
                    </h2>
                    <div className="row">
                        {response.results.map((product) => {
                            return (
                                <ProductBox
                                    key={product.id}
                                    id={product.id}
                                    name={product.name}
                                    price={product.price}
                                    img={product.imageurl}
                                />
                            );
                        })}
                    </div>

                    <Pagination className="d-flex justify-content-center">
                        <Pagination.First
                            onClick={(e) => {
                                e.preventDefault();
                                if (response.previous) {
                                    pageNumber.current--;
                                    fetchProducts(response.previous);
                                    console.log(`pgen: ${pageNumber.current}`);
                                }
                            }}
                            className={`${
                                !response.previous ? "disabled" : "active"
                            }`}
                        />
                        {response && items(response.count, 6, pageNumber)}
                        <Pagination.Last
                            onClick={(e) => {
                                e.preventDefault();
                                if (response.next) {
                                    pageNumber.current++;
                                    fetchProducts(response.next);
                                    console.log(`pgen: ${pageNumber.current}`);
                                }
                            }}
                            className={`${
                                !response.next ? "disabled" : "active"
                            }`}
                        />
                    </Pagination>
                </div>
            </section>
        );
    } else if (loading) {
        return (
            <div
                className="d-flex justify-content-center align-items-center"
                style={{ height: "500px" }}
            >
                <Spinner
                    style={{ height: "120px", width: "120px" }}
                    className="text-main"
                    animation="border"
                />
            </div>
        );
    } else if (error) {
        return (
            <>
                <div
                    style={{ height: "500px" }}
                    className=" flex-column d-flex justify-content-center align-items-center"
                >
                    <h2 className="fs-1 text-center my-4">
                        <span> NO</span> Products
                    </h2>
                    <p className="fs-2 text-danger">
                        Something went wrong. Please check your Network
                        connection.
                    </p>
                </div>
            </>
        );
    }
}
