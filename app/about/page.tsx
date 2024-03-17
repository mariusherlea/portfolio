import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About MH',
  description: 'About Marius Herlea',
};

const About = () => {
  return (
    <>
      {/* container */}
      <div>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center">
            {/*Bio title */}
            <h2 className="font-bold text-2xl">BIOGRAPHY</h2>
            {/* Bio description */}
            <p className="text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
              dicta perspiciatis eveniet rerum odio dolores maxime voluptatum
              asperiores facilis veritatis delectus modi officiis distinctio
              dignissimos numquam a saepe, eligendi vel!
            </p>
            {/* Bio quote */}
            <span className="italic">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* Bio signature */}

            <svg
              width="113"
              height="52"
              viewBox="0 0 213 104"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 2C4.21231 13.504 22.6397 41.5427 37.3889 30.3333C39.257 28.9136 40.9588 26.5944 42.2778 24.6667C42.3973 24.492 43.4346 21.9052 43.5 21.9444C44.8889 22.7778 43.5356 29.9377 43.4444 30.8889C42.7657 37.9675 42.1616 45.0005 42 52.1111C41.7484 63.1812 41.0884 75.7659 35.5556 85.6667C33.7325 88.929 30.9204 95 26.5 95C22.246 95 19.8609 93.287 16 92"
                stroke="gray"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M49.1232 2C56.7181 9.9747 61.0928 14.9791 73.0121 10.8333C77.7266 9.1935 81.392 5.21277 85.5676 2.55556C87.7302 1.17934 87.7876 12.3777 87.9009 13.6667C89.5216 32.102 88.4994 52.0508 84.5121 70.1111C82.9755 77.071 78.1898 102.395 68.1232 102C61.0893 101.724 54.065 91.7728 50.7898 86.4444C46.8893 80.0988 44.1232 73.0238 44.1232 65.5556C44.1232 57.0633 58.2297 54.6388 64.1787 52.4444C73.7363 48.9191 83.0831 44.9477 92.4009 40.8333C101.184 36.9551 112.002 33.3739 119.457 27C124.733 22.4878 125.123 14.4111 125.123 8C125.123 0.448596 120.119 4.12153 117.234 8.66667C105.557 27.067 95.8992 45.6066 96.1232 67.7778C96.1636 71.7837 101.06 86 106.623 86C113.736 86 113.283 69.2412 113.123 64.7778C113.086 63.7258 111.711 62.1111 110.568 62.1111C108.115 62.1111 106.197 70.7902 106.123 72.6667C105.764 81.8253 104.55 89.2108 113.623 93.9444C120.637 97.6037 129.972 93.2637 130.123 85.1111C130.234 79.1494 130.023 73.2593 129.345 67.3333C128.634 61.1051 130.077 69.8182 130.179 71.5C130.503 76.8538 137.067 87.7097 142.623 88.9444C146.761 89.8639 150.171 78.833 152.123 76.5556C162.821 64.0749 170.303 46.171 171.068 29.7222C171.321 24.2776 170.068 20.0798 166.679 15.7222C164.986 13.5458 161.646 11.2418 159.679 14.5556C148.045 34.1495 148.123 59.1463 148.123 81.2778C148.123 86.8687 154.466 90.8429 159.234 91.7778C164.927 92.8941 172.91 88.9285 176.068 84.3889C178.375 81.0725 179.67 76.1433 180.068 72.1667C180.246 70.3802 178.931 68.9396 177.901 71C176.638 73.5264 174.475 91.8442 177.123 92C183.236 92.3596 185.368 86.2207 189.012 82.0556C190.029 80.8935 194.123 75.6615 194.123 77.4444C194.123 81.2048 189.864 89.881 192.679 93.5C196.879 98.9001 200.123 89.9638 200.123 86.6111C200.123 82.9669 197.364 76.2356 193.123 76C189.315 75.7884 202.395 87.4733 203.068 90.5C203.41 92.0424 202.061 98.8787 204.123 99C206.908 99.1638 209.797 99.6519 211.123 97"
                stroke="gray"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            {/* Bio scroll svg */}
          </div>
          {/* skills */}
          <div className="flex flex-col gap-12 justify-center">
            {/*Skill title */}
            <h2 className="font-bold text-2xl">SKILLS</h2>
            {/* Skill list */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer hover:bg-sky-200 hover:text-black">
                HTML CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer hover:bg-sky-200 hover:text-black">
                Java Script
              </div>
              <div className="rounded p-2 text-sm cursor-pointer hover:bg-sky-200 hover:text-black">
                React
              </div>
              <div className="rounded p-2 text-sm cursor-pointer hover:bg-sky-200 hover:text-black">
                Git
              </div>
            </div>
          </div>
          {/* experience container*/}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* experience title */}
            <h2 className="font-bold text-2xl">EXPERIENCE</h2>
            {/* experience list */}
            <div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-blue-400 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Senior JavaScript Engineer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I led web development, offering expertise in JavaScript
                    frameworks.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-green-400 text-sm font-semibold w-fit">
                    Apple
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-blue-400 p-3 font-semibold rounded-b-lg rounded-e-lg">
                    Senior React Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I spearheaded React-based application development,
                    leveraging advanced skills.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - 2024{' '}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-green-400 text-sm font-semibold w-fit">
                    Microsoft
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-blue-400 p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{' '}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{' '}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2019{' '}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-green-400 text-sm font-semibold w-fit">
                    Uber
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-yellow-400 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
