import { usePathname } from 'next/navigation';
import homeImg from 'app/images/home-img.jpeg';
import workImg from 'app/images/work-img.jpeg';
import meImg from 'app/images/me-img.jpeg';

export default function useCoverImage() {
  const pathname = usePathname();

  const IMAGE_MAP = {
    '/': homeImg,
    '/work': workImg,
    '/travel': meImg
  };

  return IMAGE_MAP[pathname] ?? homeImg;
}
