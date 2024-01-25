import { ChangeEvent, FormEvent, useState, useEffect } from "react"
import { Video } from './Video'
import * as videoService from './VideoService'
import { useNavigate, useParams } from "react-router-dom"

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type IParams = {
  id: string;
}

const VideoForm = () => {
  let navigate = useNavigate()
  let params = useParams<IParams>()
   
  const initialState = {
    title: '', 
    description: '', 
    url: ''
  }

  const [video, setVideo] = useState<Video>(initialState)

  const handleInputChange = (e: InputChange) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!params.id) { 
      await videoService.createVideo(video)    
      alert('Nuevo video agregado')    
      setVideo(initialState)
    } else {
      await videoService.updateVideo(params.id, video)
    }
    navigate('/')    
  }

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id)        
    const { title, description, url } = res.data       
    setVideo({ title, description, url })
  }

  useEffect(() => {
    if(params.id) getVideo(params.id)
  }, [])

  return (
  <>
    <form onSubmit={handleSubmit}>
      <div>        
        <input type="text" name="title" 
          placeholder="Write a title for this video." autoFocus 
          onChange={handleInputChange}
          value={video.title}
        />        
      </div>
      <div>
        <input type="url" name="url"
          placeholder="https://somesite.com" 
          onChange={handleInputChange}
          value={video.url}
      />
      </div>
      <div>
        <textarea name="description" rows={3}
          placeholder="Write a description"
          onChange={handleInputChange}
          value={video.description}
        ></textarea>
      </div>
      { params.id ? (
        <button type="submit">Update Video</button> 
      ) : (
        <button type="submit">Create</button>
      )}      
    </form>
  </>
  )
}

export default VideoForm
