import { IconProps } from '@/type/menu.type';

const MoreIcon = ({ color = '#8C8787', ...props }: IconProps) => (
  <svg width="21" height="20" viewBox="0 0 21 17" fill={color} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0V3.4H21V0H0ZM0 6.8V10.2H21V6.8H0ZM0 13.6V17H21V13.6H0Z" fill={color} />
  </svg>
);

export default MoreIcon;
