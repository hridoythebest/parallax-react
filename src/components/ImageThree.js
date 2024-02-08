import { Parallax } from 'react-parallax';
import Satellite from '../img/satellite.jpeg'
import '../index.css'

const ImageThree = () => (
    <Parallax blur={0} bgImage={Satellite} strength={700} className='image' bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
        <span class="img-txt">trip of a lifetime</span>
        </div>
    </Parallax>
);

export default ImageThree