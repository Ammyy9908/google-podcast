import Tile from "./Tile";

const Health = () => {
    return ( 
        <div className="health">
            <div className="health__title">
                Top podcasts in Health &amp; Fitness
            </div>
            <div className="health_podcasts">
                <Tile/>
                <Tile/>
            </div>
        </div>
     );
}
 
export default Health;