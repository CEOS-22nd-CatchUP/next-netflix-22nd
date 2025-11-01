'use client';

import LogoAnimation from '@/animations/netflixIntro.json';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function LottieLogo() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/main');
  };

  return (
    <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2">
      <Lottie animationData={LogoAnimation} loop={false} onComplete={handleComplete} />
    </div>
  );
}
