import Tile from "./Tile"

const Comedy = ({comedy}) => {
    return ( 
        <div className="comedy">
            <div className="comedy__title">
                Top podcasts in Comedy
            </div>
            <div className="comedy__podcasts">
                {
                    comedy.map((item) =>{
                        return <Tile cover={item.cover} title={item.title} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Comedy;