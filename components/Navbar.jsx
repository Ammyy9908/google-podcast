import Hamburger from "./Hamburger";
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

const Navbar = ({setControl,isControl}) => {
    return ( 
        <nav>
            <div className="nav__left">
            <IconButton onClick={()=>isControl?setControl(false):setControl(true)}>{isControl ? <ClearIcon/>:<MenuIcon/>}</IconButton>
            <div className="brand__logos">
            <span className="brand_name">Google</span>
            <span className="product_name">Podcasts</span>
            </div>
            </div>
            <div className="search__podcasts">
                <SearchIcon/>
                <input type="search" name="key" id="key" placeholder="Search for podcasts"/>
            </div>
        </nav>
     );
}
 
//'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'
export default Navbar;