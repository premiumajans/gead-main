import HeaderWraper from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import CardTopImg from "@/Components/Card/CardTopImg";

const PhotoGalery = () => {
    return <>
        <HeaderWraper/>
        <div className="custom-container">
            <h2 className="font-weight-normal mt-4">Foto qalereya</h2>

            <div className='mt-4' style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                gridAutoColumns: 'repeat(5, 1fr)',
                gap:'10px'
            }}>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
                <CardTopImg width={'auto'}/>
            </div>
        </div>
        <Footer/>
    </>
};

export default PhotoGalery;