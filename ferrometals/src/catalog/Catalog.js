import "../gallery/gallery.css";
import "./catalog.css"

const Catalog = ({data}) => {
    return (
        // <div className="Catalog-container">{data.catalog}</div>
        <section className="Standart-Section Video-Gallery-Container">
            <h3 className="Gallery-Title">{data.catalog.title}</h3>
            <article className="Video-Gallery-Inner-Container">
                {data.catalog.photos.map((item) => 
                    <figure key={item.id} className="Video-Container">
                        <figcaption className="Catalog-Caption">{item.captionText}</figcaption>
                        <img className="Video" src={require(`../data/photo/photo_catalog/${item.photo}`)} alt={item.captionText} />
                    </figure>
                )}
            </article>
        </section>
        )
}

export default Catalog;