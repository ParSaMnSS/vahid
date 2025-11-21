export default function DemoSection() {
  return (
    <div className='w-full py-20 md:py-32 flex justify-center px-4'>
      <div className='max-w-5xl w-full aspect-video rounded-[2rem] overflow-hidden shadow-2xl'>
        <video className='w-full h-full object-cover transform-gpu' autoPlay loop muted playsInline preload='auto'>
          <source src='/assets/case-video.mp4' type='video/mp4' />
        </video>
      </div>
    </div>
  );
}
