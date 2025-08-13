import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from './Sidebar';
import Squares from '../components/Squares';
import Ballpit from '../components/Ballpit';

function MainLayout() {
  return (
    <main className="relative pt-[100px] md:pt-[156px] ml-0 md:ml-[250px] overflow-hidden">
       
      {/* Ballpit Background */}
      {/* <div className="absolute inset-0 -z-10">
        <Ballpit
        style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}
         className='col-span-1 w-full h-full' 
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
           colors={['#1a237e', '#000000']}
        />
      </div> */}

      {/* Header */}
      <Header />

      {/* Page Content */}
      <div className="w-full p-4">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
