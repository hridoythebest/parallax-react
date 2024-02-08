import { Parallax } from 'react-parallax';
import Nasa from '../img/nasa1.jpg'
import '../index.css'

const ImageOne = () => (
    <Parallax blur={0} bgImage={Nasa} strength={800} className='image' bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
            <p><span className="img-txt">a trip to Space</span></p>

        </div>
    </Parallax>
);

export default ImageOne