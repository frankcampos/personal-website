import Image from "next/image";

const AboutMeCard = () => {
  return (
    <div className="relative top-10 flex justify-center items-center">
      <div className="max-w-4xl w-ful flex flex-col md:flex-row">
        <div className="flex-1 flex justify-center items-center p-4">
          <Image
            src={'/images/frankcampos.png'}
            alt={'my profile'}
            width={300}
            height={300}
            className="rounded-full aspect-square object-cover"
          />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-4xl mt-3 font-bold">Frank Campos</h1>
          <p className="mt-4 text-gray-400">
            Latino, living in Nashville since 2006, and currently seeking a junior full-stack web developer position or an internship. I love learning new technologies and am currently focusing on TypeScript, MongoDB, React Query, and more. I’ve worked in various trades, mainly as a painter, and have been using Linux since 2015 after rescuing an old laptop when I could no longer use Windows.
          </p>
          <button className="mt-6 bg-tennessee-orange hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Resume</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;