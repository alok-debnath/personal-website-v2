import HyperLinks from './HyperLinks';

const Footer = () => {
  return (
    <>
      <div className='mt-20 grid grid-cols-12 pb-10'>
        <div className='col-span-12 mx-10 text-center'>
          <p className='text-xs xl:text-sm'>
            Built by yours truly using{' '}
            <HyperLinks
              href='https://nextjs.org'
              className='text-bright-slate/95 transition-colors hover:text-emerald'
              content='Next.js'
            />{' '}
            and{' '}
            <HyperLinks
              href='https://tailwindcss.com'
              className='text-bright-slate/95 transition-colors hover:text-emerald'
              content='Tailwind CSS'
            />
            , all from{' '}
            <HyperLinks
              href='https://code.visualstudio.com'
              className='text-bright-slate/95 transition-colors hover:text-emerald'
              content='Visual Studio Code'
            />
            . Self-hosted and styled to impress.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
