import Image from 'next/image';
import { fontSerif } from '@/lib/fonts';

const KoyomiLogo = () => {
  return (
    <div
      className={`flex flex-row items-center font-serif leading-none text-white 
        ${fontSerif.className}`}
    >
      <Image
        src="/images/catheadlogo.svg"
        height={24}
        width={24}
        alt="Cat-head Logo"
        loading="lazy"
      />
      <p className="ml-2 text-2xl">Koyomi AI</p>
    </div>
  );
};

export default KoyomiLogo;
