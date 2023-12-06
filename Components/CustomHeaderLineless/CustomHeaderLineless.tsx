import {PropsWithChildren} from "react";
import customHeaderStyle from './CustomHeaderLineless.module.scss'

function CustomHeader(props: PropsWithChildren) {
    return (
        <h2 className={`img-fluid appear-animation mt-4 ${customHeaderStyle.customHeader}` }
            data-appear-animation="fadeInLeft" data-appear-animation-delay="0" data-appear-animation-duration="1s"
            style={{animationDuration:'1s', animationDelay: '0ms', textTransform: 'capitalize', width: '100%'}}>
            <div className={customHeaderStyle.line}></div>
            <span
                style={{whiteSpace:'pre-wrap'}}>{props.children}</span>
            <div className={customHeaderStyle.line}></div>

        </h2>
    );
}

export default CustomHeader;