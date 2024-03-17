import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact MH',
  description: 'Contact Marius Herlea',
};

export default function Contact() {
  return (
    <>
      <div className="flex flex-col justify-center items-center md:flex-row p-8 md:p-16">
        <a href="mailto:mariusherlea@gmail.com" className="hover:text-gray-500">
          Mail me
        </a>
      </div>
    </>
  );
}
