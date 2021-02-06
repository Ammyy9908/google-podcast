import Tile from "./Tile";

const Business = () => {
    return ( 
        <div className="business">
            <div className="business__title">
                Top podcasts in Business
            </div>
            <div className="business_podcasts">
                <Tile/>
                <Tile/>
            </div>
        </div>
     );
}
 
export default Business;