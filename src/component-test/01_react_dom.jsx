
import image from '/logo192.png'
function Image() {
  const imageData = {
    style:{
      width:200,
      height:200,
      backgroundColor:'grey'
    }
  }

  return (
    <div>
      <img src={image} alt="" {...imageData} />
    </div>
  )
}

export default Image
