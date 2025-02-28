import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="p-4 my-5 bg-white bg-opacity-50 rounded-lg shadow border border-white backdrop-blur">
        <div className="p-5 bg-white rounded-lg text-center">
          <h1 className="display-1 fw-bold">404</h1>
          <h2 className="display-4 fw-bold">Page Not Found</h2>
          <div className="mt-4">
            <Link to="/login" className="btn btn-primary px-4 py-2">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
