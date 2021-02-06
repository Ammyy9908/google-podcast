import Tile from "./Tile"

const Subscriptions = ({subscriptions}) => {
    return ( 
        <div className="subscription">
           <div className="subscription__container__title">
               Your Subscriptions
           </div>
           <div className="subscriptions">
           {
               subscriptions.map((item)=>{
                   return <Tile cover={item.cover} title={item.title} author={item.author}/>
               })
           }
           </div>
        </div>
     );
}
 
export default Subscriptions;