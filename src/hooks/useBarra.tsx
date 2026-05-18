import { useState } from 'react';

export const useBarra = () => {
    const [startMenuOpen, setStartMenuOpen] = useState<boolean>(false);
  return {startMenuOpen, setStartMenuOpen };
};