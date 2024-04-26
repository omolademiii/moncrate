import React from 'react';
import PlayPauseBtn from './playPauseButton'; // Corrected import statement
import myImage from './moncrateee.webp';
import ContentButton from './contentButton';
import ScontentButton from './scontentButton';
import StreamList from './streamList';
import FirstFooter from './firstFooter'
import SecondFooter from './secondFooter';
import MusicList from './musicList';

const MainContent = () => {
  return (
    <main className='main'>
      <div className='container'>
        <div className='content'>
        <div className='mt-24 flex justify-around'>
              <img className='' src={myImage} alt="Moncrateee" width={500} />
              <div className='flex flex-col justify-center'>
                <h1 className='text-5xl leading-10 pb-5'>LEVEL DAYS</h1>
                <h1 className='text-5xl font-bold pb-20'>CONRO</h1>
                <div className='flex justify-around gap-3'>
                    <ContentButton />
                    <ScontentButton />
                    {/* <PlayPauseBtn /> */}

                </div>
              </div>
            </div>
            
          <div className='test mt-24'>
            
            <h1 className='text-5xl tracking-wider font-bold pl-12'>STREAM IT YOUR WAY</h1>
            <StreamList />
            <h1 className='text-5xl tracking-wider font-bold pl-12 mt-16'>TRACK IT</h1>
            <div className='pb-40'>
            <MusicList  />
            </div>
            </div>
            <div className='pb-60'>

            </div>
          <div className='pt-24'>
            <FirstFooter />
          </div>
          <div>
            <SecondFooter />
          </div>
          

      
        </div>
      </div>
    </main>
  );
};

export default MainContent;
