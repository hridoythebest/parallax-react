import { Parallax } from 'react-parallax';
import SpaceStation from '../img/spaceStation.jpeg'
import '../index.css'

const ImageTwo = () => (
    <Parallax blur={0} bgImage={SpaceStation} strength={700} className='image' bgImageStyle={{minHeight:"100vh"}}>
        <div className='content'>
        <span class="img-txt">See earth from above</span>
        </div>
    </Parallax>
);

export default ImageTwo