function CricbuzzNews({imageLink, title, content, news}) {
    return (
        <div style={{width:"400px"}}>
      <img style={{borderRadius:"10px"}} src={imageLink}  alt="Img"/>
       <h3>{title}</h3>
       <p>
{content}
       </p>
       <a href={news}>{news}</a>
       <hr/>
        </div>
    );
}

export default CricbuzzNews;