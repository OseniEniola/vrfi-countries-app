import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  // Access the error object caught by the router
  const error: any = useRouteError();

  // Extract useful details from the error object
  // const errorMessage = error?.message || 'An unknown error occurred';
  const errorStack = error?.stack;

  // Function to check if the current environment is development
  const isDevelopmentEnvironment = () => {
    const hostname = window.location.hostname;

    return (
      hostname === 'localhost' || // Local development
      hostname === '127.0.0.1' || // Local development (IP)
      hostname === 'sandbox.icanopii.com' // Specific dev server
    );
  };

  const showDetails = isDevelopmentEnvironment();

  return (
    <>
      {/*<Container className='m-auto container'>*/}
      <div className='w-full p-3 my-12 items-center'>
        <div className='h-full justify-center flex py-18'>
          <div className='text-center w-[620px]'>
            <h3 className='text-[28px] font-bold mb-2'>Oops! Something went wrong on our end</h3>
            <p className='text-[18px]'>
              Please try refreshing the page or come back later. If the issue persists, contact
              support.
            </p>

            {showDetails && errorStack && (
              <div
                className={'mt-2'}
                style={{
                  padding: '20px',
                  border: '1px solid red',
                  borderRadius: '5px',
                  fontSize: '12px',
                  textAlign: 'left'
                }}
              >
                {errorStack && (
                  <pre style={{ whiteSpace: 'pre-wrap', overflowWrap: 'break-word' }}>
                    {errorStack}
                  </pre>
                )}
              </div>
            )}

            <div className='flex-col justify-start items-start mt-4'>
              <Link
                to={'/'}
                className='self-stretch h-10 px-3 py-2 bg-[#00a1e3] rounded-lg border border-[#00a1e3] justify-center items-center gap-2 inline-flex'
              >
                <div className='text-white text-sm font-semibold'>Back to home</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/*</Container>*/}
    </>
  );
};

export default ErrorPage;
