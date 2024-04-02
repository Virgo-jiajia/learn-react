import { useState } from 'react'

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>
}

function Entry() {
  const user = {
    name: 'jia',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  }
  let isLoggedIn = false
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ]

  const [count, setCount] = useState(0)
  function handleClick() {
    setCount(count + 1)
  }

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ))

  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <div>{isLoggedIn ? 'true' : 'false'}</div>
      <img
        className='avatar'
        src={user.imageUrl}
        alt={'photo of ' + user.name}
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      <ul>{listItems}</ul>
    </div>
  )
}

export default Entry
