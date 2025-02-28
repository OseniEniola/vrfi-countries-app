import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
  
        <div className='h-[697px] w-full p-3 my-12 bg-white/50 rounded-lg shadow border border-white backdrop-blur-[5px] justify-start items-start gap-4 inline-flex'>
          <div className='grow shrink basis-0 self-stretch px-4 pt-12 pb-4 bg-white rounded-lg flex-col justify-start items-center gap-6 inline-flex'>
            <div className='text-center'>
              <span className="text-[280px] font-black font-['Avenir Next'] leading-[400px]">
                404
              </span>
              <span className="text-[110px] font-black font-['Avenir Next'] leading-[116px]">
                {' '}
                <br />
              </span>
              <span className="text-[80px] font-black font-['Avenir Next'] leading-[116px]">
                Page not found
              </span>
            </div>
            <div className='flex-col justify-start items-start flex'>
              <div className='self-stretch h-10 px-3 py-2 bg-[#00a1e3] rounded-lg border border-[#00a1e3] justify-center items-center gap-2 inline-flex'>
                <Link
                  to={'/'}
                  className="text-white text-sm font-semibold font-['Avenir Next'] leading-[21px]"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
   
  );
};

export default NotFound;
