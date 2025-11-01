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
    <div className="flex h-96 w-96 items-center justify-center">
      <Lottie animationData={LogoAnimation} loop={false} onComplete={handleComplete} />
    </div>
  );
}
