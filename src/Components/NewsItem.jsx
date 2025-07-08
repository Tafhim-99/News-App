const NewsItem = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px",width:"330px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):"News is the timely reporting of current events, providing information about important happenings from around the world. In our fast-paced society, describing news accurately and effectively can be a daunting task. Words to describe news serve as powerful tools in conveying the essence and impact of a story. Join us as we explore a comprehensive list of words that help paint a vivid picture of the news landscape."}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    
        
    
  )
}

export default NewsItem
