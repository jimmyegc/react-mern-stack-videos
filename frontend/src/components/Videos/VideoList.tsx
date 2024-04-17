import { useEffect, useState } from "react"
import { Video } from './Video'
import * as videoService from './VideoService'
import VideoItem from "./VideoItem"

const VideoList = () => {

  const [videos, setVideos] = useState<Video[]>([])

  const getVideos = async () => {
    const res = await videoService.getVideos()
    const formatedVideos = res.data.map(video => {
      return {
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date(),
      }
    })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
    setVideos(formatedVideos)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <div
      /* className="bg-slate-100 h-screen mx-auto container" */
      className="mx-auto mt-4 grid max-w-6xl gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
    >
      {videos.map((video) => {
        return <VideoItem video={video} key={video._id} getVideos={getVideos} />
      })}
    </div>
  )
}

export default VideoList

