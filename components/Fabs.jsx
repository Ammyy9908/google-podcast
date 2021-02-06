import { Explore, SubscriptionsOutlined } from "@material-ui/icons"

const Fabs = ({isControl}) => {
    return ( 
        <div className="fabs" style={{right:isControl?"10px":"-100px"}}>
            <button className="btn_explore">
                <Explore/>
            </button>
            <button className="btn_subscriptions">
                <SubscriptionsOutlined/>
            </button>
        </div>
     );
}
 
export default Fabs;