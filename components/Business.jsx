import Tile from "./Tile";

const Business = ({business}) => {
    return ( 
        <div className="business">
            <div className="business__title">
                Top podcasts in Business
            </div>
            <div className="business_podcasts">
                {
                    business.map((item) =>{
                        return <Tile key={item.id} title={item.title} author={item.author} cover={item.cover} id={item.id}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Business;