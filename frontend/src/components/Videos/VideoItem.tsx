import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { Video } from "./Video";
import "./VideoItem.css";
import * as videoService from "./VideoService";

interface Props {
  video: Video;
  getVideos: () => void;
}
const VideoItem = ({ video, getVideos }: Props) => {
  let navigate = useNavigate();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    getVideos();
  };

  return (<>
    <article className="flex flex-col overflow-hidden rounded bg-white shadow">
      <div className="h-52">
        <div className="h-full w-full object-cover object-center">
          <ReactPlayer url={video.url} />
        </div>
      </div>
      <div className="flex-1 space-y-3 p-5">
        <h3
          onClick={() => navigate("/update/" + video._id)}
          className="text-sm font-semibold text-sky-500"
        >
          {video.title}
        </h3>
        <h2 className="text-xl font-semibold leading-tight text-slate-800">{video.description}</h2>
        <p className="hidden text-slate-500 md:block">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Doloremque perspiciatis earum optio ipsum magni corrupti autem
          eius
        </p>
      </div>


      <span
        className="rounded-full bg-red-600 text-white p-2 flex w-10 justify-center mb-4 items-end content-end"
        onClick={() => video._id && handleDelete(video._id)}>X</span>

    </article>
  </>
  );
};

export default VideoItem;
