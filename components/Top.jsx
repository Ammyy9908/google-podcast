import Tile from "./Tile";


const Top = ({top}) => {
    return ( 
        <div className="top_podcast">
            <div className="top_podcast__title">
                Top podcasts
            </div>
            <div className="top_podcasts">
                {
                    top.map((item)=>{
                        return <Tile cover={item.cover} title={item.title} author={item.author} key={item.id} id={item.id}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Top;