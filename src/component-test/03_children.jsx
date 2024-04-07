function List({title, children,footer=<div>默认底部</div>}){
  return (
    <div>
      <p>{title}</p>
      <ul>{children}</ul>
      {footer}
    </div>
  )
}

export default function Lists() {
  return (
    <>
    <List title='列表1' footer={<p>我是底部</p>}>
      <li>1</li>
      <li>2</li>
    </List>
    <List title='列表2'>
      <li>A</li>
      <li>B</li>
    </List>

    </>
  )
}
