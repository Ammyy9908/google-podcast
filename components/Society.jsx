import Tile from "./Tile"

const Society = ({culture}) => {
    return ( 
        <div className="society__podcast">
            <div className="society_podcast__title">
                Top podcasts in Society &amp; Culture
            </div>
            <div className="society_podcasts">
                {
                    culture.map((item) =>{
                        return <Tile cover={item.cover} title={item.title} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Society;