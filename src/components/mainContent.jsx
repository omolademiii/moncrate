import React from 'react';
import PlayPauseBtn from './playPauseButton'; 
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
          <div className='mt-24 flex flex-col lg:flex-row justify-center lg:justify-around items-center'>
            <img className='mb-10 lg:mb-0' src={myImage} alt="Moncrateee" width={500} />
            <div className='text-center lg:text-left'>
              <h1 className='text-5xl leading-10 pb-5'>LEVEL DAYS</h1>
              <h1 className='text-5xl font-bold pb-20'>CONRO</h1>
              <div className='flex justify-center lg:justify-start gap-3'>
                <ContentButton />
                <ScontentButton />
                {/* <PlayPauseBtn /> */}
              </div>
            </div>
          </div>

          
          <div className='test mt-24'>
            <h1 className='text-5xl tracking-wider font-bold text-center lg:text-left pl-12'>STREAM IT YOUR WAY</h1>
            <StreamList />
            <h1 className='text-5xl tracking-wider font-bold text-center lg:text-left pl-12 mt-16'>TRACK IT</h1>
            <div className='pb-40'>
              <MusicList />
            </div>
          </div>

          
          <div className='pt-36 pb-60'>
            <FirstFooter />
            <SecondFooter />
          </div>

        </div>
      </div>
    </main>
  );
};

export default MainContent;
