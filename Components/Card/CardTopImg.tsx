import {PropsWithChildren} from "react";
import Image from "next/image";

const CardTopImg = ({width}: { width: string }) => {
    return <>
        <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0 appear-animation animated fadeInUpShorter appear-animation-visible"
            data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200"
            style={{animationDelay: "200ms", width: width}}>

            <div className="card">
                <Image loading={'lazy'} width='150' height='200' style={{maxHeight: "200px", height: '200px'}} className="card-img-top"
                       src="/img/blog/wide/blog-11.jpg" alt="Card Image"/>
                <div style={{padding: '1rem'}} className="card-body">
                    <h4 className="card-title mb-1 text-4 font-weight-bold">Card Title</h4>
                    <p className="card-text mb-2 pb-1">Lorem ipsum dolor sit amet, consectetur adipiscing onsectetur
                        adipiscing elit elit onsectetur adipiscing lit onsectetur adipiscing elit.</p>
                    <a href="https://www.okler.net/"
                       className="read-more text-color-primary font-weight-semibold text-2">Read More <i
                        className="fas fa-angle-right position-relative top-1 ms-1"></i></a>
                </div>
            </div>
        </div>
    </>
}

export default CardTopImg