import Image from 'next/image';
import jesus from '../public/images/jesus.png';

export default function Home() {
  return (
    <div>
      <div className=" text-6xl text-red-600">Welcome to</div>
      <div className=" text-4xl text-blue-600">JOYFUL YOUTH MISSION</div>
      <div className=" text-2xl text-pink-600">나의 젊음을 주님께!</div>
      <Image src={jesus} alt="Jesus is Huging" width={300} height={300} />
    </div>
  );
}

