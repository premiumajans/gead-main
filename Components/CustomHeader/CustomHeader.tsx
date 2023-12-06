import {PropsWithChildren} from "react";


function CustomHeader(props: PropsWithChildren) {
    return (
        <h2 className="img-fluid appear-animation 'mt-4'"
            data-appear-animation="fadeInLeft" data-appear-animation-delay="0" data-appear-animation-duration="1s"
            style={{animationDuration:'1s', animationDelay: '0ms', textTransform: 'capitalize', width: '100%'}}><span
           style={{whiteSpace:'pre-wrap'}} className="badge badge-primary">{props.children}</span></h2>
    );
}

export default CustomHeader;