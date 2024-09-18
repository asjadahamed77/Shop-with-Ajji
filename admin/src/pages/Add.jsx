import upload_area from '../assets/upload_area.png'

const Add = () => {
  return (
    <form>
      <div>
        <p>Upload Image</p>
        <div>
            <label htmlFor="">
                <img src={upload_area} alt="" />
                <input type="file"  id="image1" />
            </label>
        </div>
      </div>
    </form>
  )
}

export default Add
