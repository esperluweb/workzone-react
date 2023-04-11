import '../../assets/css/Site.css'
import wordpresslogo from '../../assets/wordpress.png'

function Site({id, name, folder, wordpress}) {
    return (
        <article className="site">
            <h2>{name} {wordpress ? <img className="wp-logo" src={wordpresslogo} /> : null}</h2>
            <div className="buttons">
                <a href={"/"+folder} className="primary">Site</a>
                { wordpress ? <a href={"/"+folder+"/admin"} className="secondary">Admin</a> : null }
            </div>
        </article>
    )
}

export default Site