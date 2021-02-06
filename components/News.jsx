import Tile from "./Tile"

const News = ({news}) => {
    return ( 
        <div className="news">
            <div className="news__container__title">
                Top podcasts in News
            </div>
            <div className="podcasts_news">
                {
                    news.map((item) =>{
                        return <Tile cover={item.cover} title={item.title} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default News;