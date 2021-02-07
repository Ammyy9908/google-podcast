import { Explore, SubscriptionsOutlined } from "@material-ui/icons";
import Link from 'next/link';

const Fabs = ({isControl}) => {
    return ( 
        <div className="fabs" style={{right:isControl?"10px":"-100px"}}>
            <Link href="/"><button className="btn_explore" style={{cursor:"pointer"}}>
                <Explore/>
            </button></Link>
            <button className="btn_subscriptions">
                <SubscriptionsOutlined/>
            </button>
        </div>
     );
}
 
export default Fabs;