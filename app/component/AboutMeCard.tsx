'use client';
import Image from 'next/image';
import { useState } from 'react';

const AboutMeCard = () => {
  const [loading, setLoading] = useState(false);

  const handleDownloadResume = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/downloadResume');
      if (response.status == 200) {
        const data = await response.json();
        window.open(data.url, '_blank');
      } else {
        console.error('Failed to fetch resume URL');
        setLoading(false);
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative top-10 flex justify-center items-center">
      <div className="max-w-4xl w-ful flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center p-4">
          <Image
            src={'/images/frankcampos.png'}
            alt={'my profile'}
            priority={false}
            width={300}
            height={300}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-4xl mt-3 font-bold">Frank Campos</h1>
          <p className="mt-4 text-gray-400">
            I'm Frank Campos, a data engineer from Nashville, Tennessee, with a
            background in full-stack web development. I'm currently a contractor
            at Strata Decision Technology. When I'm not working, you can find me
            at a hardcore punk festival, spending time with my daughters, or
            reading my favorite author, Jorge Luis Borges. As a proud
            Salvadoran, I also love eating pupusas.
          </p>
          <button
            disabled={loading}
            onClick={handleDownloadResume}
            className="mt-6 bg-tennessee-orange hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
            <svg
              className="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>{loading ? 'Loading...' : 'Resume'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
