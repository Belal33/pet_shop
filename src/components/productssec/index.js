import "./productssec.css";
import { ProductBox } from "./ProductBox";

export default function ProductsSec() {
    return (
        <section class="product py-5" id="product">
            <div class="container">
                <h2 class="fs-1 text-center mb-4">
                    Our <span> Products</span>
                </h2>
                <div class="row">
                    <ProductBox price={21} img={"image/product_01.jpg"} />
                    <ProductBox price={35} img={"image/product_02.jpg"} />
                    <ProductBox price={11} img={"image/product_03.jpg"} />
                    <ProductBox price={26} img={"image/product_04.jpg"} />
                    <ProductBox price={23} img={"image/product_05.jpg"} />
                    <ProductBox price={17} img={"image/product_06.jpg"} />
                </div>
            </div>
        </section>
    );
}
