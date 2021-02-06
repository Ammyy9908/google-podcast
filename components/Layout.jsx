import Fabs from "./Fabs";
import Navbar from "./Navbar";
import SideNav from "./Sidenav";
import {useState} from 'react';

const Layout = ({children}) => {

    const [isControl,setControl] = useState(false);
    return ( 
        <>
        
       <Navbar setControl={setControl} isControl={isControl}/>
       <Fabs isControl={isControl}/>
      <div>{children}</div>
        </>
     );
}
 
export default Layout;