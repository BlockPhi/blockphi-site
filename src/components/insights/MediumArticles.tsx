'use client';

import { useEffect, useRef } from 'react';

export default function MediumArticles() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.origin !== 'https://medium-widget.vercel.app') return;
      if (e.data && e.data.type === 'mw-resize' && typeof e.data.height === 'number') {
        const iframe = iframeRef.current;
        if (iframe) {
          iframe.style.height = e.data.height + 'px';
        }
      }
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div className="mw-widget">
      <iframe
        ref={iframeRef}
        src="https://medium-widget.vercel.app/"
        className="mw-iframe"
        title="BlockPhi Capital — Latest Research Articles"
        loading="lazy"
      />
    </div>
  );
}
