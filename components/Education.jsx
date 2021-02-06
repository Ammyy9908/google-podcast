import Tile from "./Tile"

const Education = ({education}) => {
    return ( 
        <div className="education">
            <div className="education__title">
                Top podcasts in Education
            </div>
            <div className="education_podcasts">
                {
                    education.map((item) =>{
                        return <Tile cover={item.cover} title={item.title} author={item.author}/>
                    })
                }
            </div>
        </div>
     );
}
 
export default Education;