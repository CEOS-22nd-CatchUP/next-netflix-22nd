'use client';

const PlayBtn = ({ color = 'black', ...props }: IconProps) => (
  <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M0 0V21.6L18 10.8L0 0Z" fill={color} />
  </svg>
);

export default PlayBtn;
