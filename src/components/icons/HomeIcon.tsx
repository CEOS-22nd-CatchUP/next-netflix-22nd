import { IconProps } from '@/type/menu.type';

const HomeIcon = ({ color="#8C8787", fill="none", ...props}: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={fill} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M22 9.15789L12 2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M2 9.15789L12 2" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>  
    <path d="M5 19V7.36841" stroke={color} stroke-width="2" stroke-linecap="round"/>
    <path d="M19 19V7.36841" stroke={color} stroke-width="2" stroke-linecap="round"/>
    <path d="M5 19H19" stroke={color} stroke-width="2" stroke-linecap="round"/>
    </svg>
);

export default HomeIcon;