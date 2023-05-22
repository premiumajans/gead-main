import React from 'react';
import Image from "next/image";

const AlertComponent = ({imgSrc}:{imgSrc:string}) => {
    return (
        <div className="appear-animation custom-container my-4"
             data-appear-animation="fadeIn"
             data-appear-animation-delay="0"
             style={{textAlign: 'center', animationDuration: "1s", animationDelay: "0ms"}}><Image
            style={{objectFit: 'contain', maxWidth: '100%', height: 'auto'}} src={imgSrc}
            alt={'alert-image'} width={1000} height={600}/></div>
    );
};

export default AlertComponent;