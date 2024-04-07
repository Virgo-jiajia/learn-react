function Detail({content,active}){
  return (
    <div>
      <p>{content}</p>
      <p>状态 {active?'显示':'隐藏'}</p>
    </div>
  )
}

function Article({title,detailData}){
  return (
    <div>
      <h2>{title}</h2>
      <Detail {...detailData}/>
    </div>
  )
}

export default function Articles() {
  const articleData = [{
    title:'标题1',
    detailData:{
      content:'内容1',
      active:true
    }
  },{
    title:'标题2',
    detailData:{
      content:'内容2',
      active:false
    }
  },
  {
    title:'标题2',
    detailData:{
      content:'内容2',
      active:false
    }
  }]
  return (
    <>
     {
      articleData.map(art => <Article {...art}/>)
     }
    </>
  )
}
