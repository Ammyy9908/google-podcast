import Tile from "./Tile";

const Health = ({health}) => {
    return ( 
        <div className="health">
            <div className="health__title">
                Top podcasts in Health &amp; Fitness
            </div>
            <div className="health_podcasts">
                {
                    health.map((item)=>{
                        return <Tile key={item.id} id={item.id} title={item.title} cover={item.cover} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Health;