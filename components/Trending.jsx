import Tile from "./Tile"

const Trending = ({trending}) => {
    return ( 
        <div className="trending__podcast">
            <div className="trending_podcast__title">
                Trending podcasts
            </div>
            <div className="trending__podcasts">
                {
                    trending.map((item) =>{
                        return <Tile cover={item.cover} title={item.title} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Trending;