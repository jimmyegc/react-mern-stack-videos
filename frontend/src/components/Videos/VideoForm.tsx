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
  <div className="bg-slate-100 h-screen">
    <form onSubmit={handleSubmit} className="container mx-auto flex flex-col">
      <div className="m-4">        
        <input type="text" name="title" 
          placeholder="Write a title for this video." autoFocus 
          onChange={handleInputChange}
          value={video.title}
          className="border-2 border-slate-50 p-3 w-full"
        />        
      </div>
      <div className="m-4">
        <input type="url" name="url"
          placeholder="https://somesite.com" 
          onChange={handleInputChange}
          value={video.url}
          className="border-2 border-slate-50 p-3 w-full"
      />
      </div>
      <div className="m-4">
        <textarea name="description" rows={3}
          placeholder="Write a description"
          onChange={handleInputChange}
          value={video.description}
          className="border-2 border-slate-50 p-3 w-full"
        ></textarea>
      </div>
      { params.id ? (
        <button type="submit">Update Video</button> 
      ) : (
        <button type="submit" className="inline-block px-5 py-2 mx-auto text-white bg-blue-600 rounded-full hover:bg-blue-700 md:mx-0">Create</button>
      )}      
    </form>
  </div>
  )
}

export default VideoForm
