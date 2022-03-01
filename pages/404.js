import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div className="bg-blue-200 h-screen p-8">
            <div className="flex align-middle">
            <Image
                src="/arrow.png"
                alt="back"
                width={26}
                height={26}
            />
            <Link href="/"><a className="ml-2 hover:underline">Back to Home</a></Link>
            </div>
        <div className="text-center mt-16">
            <Image
                src="/404.png"
                alt="404 page"
                width={700}
                height={500}
            />    
        </div>

        </div>
    );
}
 
export default NotFound;