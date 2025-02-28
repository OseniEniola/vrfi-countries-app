import React, { ReactNode, Component, ErrorInfo } from 'react';
import { reportErrorLogic } from '@/utils/errorService.ts';
import { Container } from '@/utils/styles.ts';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
  showDetails: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: undefined,
      errorInfo: undefined,
      showDetails: false
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error, errorInfo: undefined, showDetails: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
    reportErrorLogic(error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined, errorInfo: undefined });
  };

  toggleDetails = () => {
    this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
  };

  render() {
    const { hasError, error, errorInfo, showDetails } = this.state;
    const { fallback, children } = this.props;

    const hostName = window.location.hostname;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      return (
        <Container className='m-auto pt-40 container'>
          <div className='flex items-center justify-center'>
            <div className='bg-white rounded-lg p-8 max-w-lg text-center'>
              <h1 className='text-2xl font-semibold text-red-500'>Something went wrong</h1>
              <p className='text-gray-600 mt-2'>
                We apologize for the inconvenience. Please try again later.
              </p>

              <div className='mt-6 space-x-4'>
                <button
                  onClick={this.handleRetry}
                  className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600'
                >
                  Retry
                </button>
                <button
                  onClick={() => window.location.reload()}
                  className='px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400'
                >
                  Reload Page
                </button>
              </div>
              {hostName.toLowerCase() != 'icanopii.com' && (
                <div className='mt-8'>
                  <button
                    onClick={this.toggleDetails}
                    className='text-sm text-blue-500 hover:underline'
                  >
                    {showDetails ? 'Hide Error Details' : 'Show Error Details'}
                  </button>

                  {showDetails && error && (
                    <div className='mt-4 text-left bg-gray-100 p-4 rounded-md'>
                      <h3 className='font-semibold text-gray-800'>Error Details:</h3>
                      <pre className='mt-2 text-[11px] text-gray-700 whitespace-pre-wrap'>
                        {error.toString()}
                        {errorInfo?.componentStack && (
                          <>
                            <br />
                            <strong>Component Stack:</strong>
                            <br />
                            {errorInfo.componentStack}
                          </>
                        )}
                      </pre>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Container>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
