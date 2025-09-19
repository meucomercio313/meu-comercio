import React from 'react';

export const handleScroll = (
  e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  targetId: string
) => {
  e.preventDefault();
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
}); } };