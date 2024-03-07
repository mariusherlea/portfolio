import Image from 'next/image';
import eu from '../public/eu.png';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center md:flex-row">
      <div>
        <Image
          src={eu}
          alt="Picture oh the author"
          width={300}
          height={300}
          className=""
        />
      </div>
      <div className="p-8">
        <h1 className="text-xl">Povesti</h1>
        <p>
          Trebuie sa spui tot felul despre tine. Ce sa spun ? Sunt un om normal.
          Un pic ambitios.
        </p>
      </div>
    </div>
  );
}
