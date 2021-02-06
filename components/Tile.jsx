const Tile = ({cover,title,author}) => {
    return ( 
        <div className="podcast__tile">
            <div className="podcast__cover">
            <img src={cover ? cover:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNbSxmQw7q9fTK1UbGB9d0lXq4X1G1rPP9oDjCj_40Hw1UUCC'}/>
            </div>
            <div className="podcast__title">
                {title ? title.length>10 ? title.substring(0,25)+"...":title :"Podcast Title"}
            </div>
            <div className="podcast__author">
            {author ? author.length>15 ? author.substring(0,15)+"...":author :"Podcast Title"}
            </div>
        </div>
     );
}
 
export default Tile;