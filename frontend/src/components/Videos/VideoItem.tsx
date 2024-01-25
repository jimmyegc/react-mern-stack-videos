import ReactPlayer from "react-player"
import { useNavigate } from "react-router-dom"
import { Video } from "./Video"
import './VideoItem.css'
import * as videoService from './VideoService'

interface Props {
  video: Video
  getVideos: () => void
}
const VideoItem = ({ video, getVideos }: Props) => {
  let navigate = useNavigate()

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id)
    getVideos()
  }

  return (
    <div className="video-card" >
      <h2
        onClick={() => navigate('/update/' + video._id) }
      >{video.title}</h2>
      <p>{video.description}</p>
      <span onClick={ () => video._id && handleDelete(video._id) }>X</span>
      <ReactPlayer url={video.url} />
      
    </div>
  )
}

export default VideoItem