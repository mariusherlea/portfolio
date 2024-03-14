import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <div>
        <Image
          src={'../public/static/images/eu.png'}
          alt="Picture oh the author"
          style={{ objectFit: 'contain' }}
        />
      </div>
      <div className="p-8">
        <h1 className="text-xl">Povesti</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa non
          voluptate eaque quisquam, fugiat, officia ex voluptates praesentium
          qui reprehenderit consectetur rem, eligendi enim et repudiandae atque
          assumenda totam vel.
        </p>
      </div>
    </div>
  );
}
