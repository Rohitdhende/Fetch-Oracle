import { useState } from 'react';
import Script from 'next/script';

import { AnimateCC } from 'react-adobe-animate';

const Home = () => {
  const [scriptsLoadedCount, setScriptsLoadedCount] = useState(0);
  const [isCreateJSLoaded, setIsCreateJSLoaded] = useState(false);

  const [animationObject, getAnimationObject] = useState(null);

  console.log(animationObject);

  const onScriptLoad = () => {
    setScriptsLoadedCount((n) => n + 1);
  };

  const areScriptsLoaded = isCreateJSLoaded && scriptsLoadedCount === 1;

  return (
    <div>
      <Script
        src="https://code.createjs.com/1.0.0/createjs.min.js"
        onReady={() => setIsCreateJSLoaded(true)}
      />
      {isCreateJSLoaded && (
        <>
          <Script
            src="./assets/js/graph.js"
            type="text/javascript"
            onReady={onScriptLoad}
          />
        </>
      )}
      
       
      <div style={{ minHeight: '600px' }}>
        {areScriptsLoaded && (
          <AnimateCC
            animationName={'Graph'}
            getAnimationObject={getAnimationObject}
            onError={() => console.log('onError')}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
