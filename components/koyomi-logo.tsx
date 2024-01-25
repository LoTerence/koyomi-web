import Image from 'next/image';

const KoyomiLogo = () => {
  return (
    <div className="flex flex-row items-center font-serif leading-none text-white">
      <Image
        src="/images/catheadlogo.svg"
        height={24}
        width={24}
        alt="Cat-head Logo"
        priority
      />
      <p className="ml-2 text-2xl">Koyomi AI</p>
    </div>
  );
};

export default KoyomiLogo;
