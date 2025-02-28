
import { MainLayout } from '@/layouts';
import { Outlet } from 'react-router-dom';


const Root = () => {


  return (
    <>
    
      <div>
       <MainLayout>
       <Outlet />
       </MainLayout>
       
      </div>
    </>
  );
};

export default Root;
