import Image from 'next/image';
import love from '../public/love.jpg'

const ImageComponent = () => {
    return ( 
        <div>
            <div className='text-center mt-16'>
                <Image
                    src={love}
                    alt="back"
                    width={500}
                    height={300}
                />
            </div>
            <div className='text-center mt-16'>
                <Image
                    src={love}
                    alt="back"
                    objectFit="contain"
                />
            </div>
</div>
     );
}
 
export default ImageComponent;