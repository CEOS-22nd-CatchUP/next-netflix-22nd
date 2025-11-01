import HomeIcon from '@/components/icons/HomeIcon';
import SearchIcon from '@/components/icons/SearchIcon';
import ComingSoonIcon from '@/components/icons/ComingSoonIcon';
import DownloadIcon from '@/components/icons/DownloadIcon';
import MoreIcon from '@/components/icons/MoreIcon';

export const BTM_MENU_ITEMS = [
  { label: 'Home', icon: HomeIcon, path: '/main', mtClass: '-mt-[7px]', adjustIconTop: true },
  { label: 'Search', icon: SearchIcon, path: '/search', mtClass: '-mt-1' },
  { label: 'Coming Soon', icon: ComingSoonIcon, path: '/comingSoon', mtClass: '-mt-1', adjustPx: true },
  {
    label: 'Downloads',
    icon: DownloadIcon,
    path: '/downloads',
    mtClass: '-mt-[7px]',
    adjustPx: true,
    adjustTextTop: true,
  },
  { label: 'More', icon: MoreIcon, path: '/more', mtClass: '-mt-1' },
];
