import React, { useEffect } from 'react';

type UseKeyDownHandlerProps = {
  key: string;
  handler: () => void;
};

function useKeyDownHandler({ key, handler }: UseKeyDownHandlerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === key) handler();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
}

export default useKeyDownHandler;
