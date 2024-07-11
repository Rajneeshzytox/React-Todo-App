function CardStats(
  {
    title, // title to display
    data, // number to display
  }
){
    return(
        <div className="stats from-blue-400 to-primary bg-clip-text text-transparent bg-gradient-to-l shadow-primary shadow mr-4">
        <div className="stat">
          <div className="stat-title">{title}</div>
          <div className="stat-value">{data}</div>
         
        </div>
      </div>
    )

}

export default CardStats;