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

  return (
    <>
      <main className="video-cardx p-4">
        <div className="grid md:grid-cols-2 max-w-6xl mx-auto lg:grid-cols-3 gap-4 mt-4">
          <article className="bg-white shadow rounded overflow-hidden flex flex-col ">
            <div className="h-52">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/3162044/pexels-photo-3162044.jpeg?"
                alt=""
              />
            </div>
            <div className="p-5 space-y-3 flex-1">
              <h3 className="text-sm font-semibold text-sky-500">Laravel</h3>
              <h2 className="text-xl font-semibold text-slate-800 leading-tight">
                Desarrollo de una API
              </h2>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tenetur eos ullam? Ad consequatur hic aliquid sint omnis
                expedita{" "}
              </p>
            </div>
            <div className="flex p-5 space-x-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=Jimmy+García"
                alt="Jimmy García"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-slate-600 leading-4">
                  Jimmy García
                </span>
                <span className="text-sm text-slate-500">Fecha</span>
              </div>
            </div>
          </article>
          <article className="bg-white shadow rounded overflow-hidden flex flex-col">
            <div className="h-52">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/163036/mario-luigi-yoschi-figures-163036.jpeg"
                alt=""
              />
            </div>
            <div className="p-5 space-y-3 flex-1">
              <h3 className="text-sm font-semibold text-sky-500">NodeJs</h3>
              <h2 className="text-xl font-semibold text-slate-800 leading-tight">
                Desarrollo de una API
              </h2>
              <p className="text-slate-500 hidden md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tenetur eos ullam? Ad consequatur hic aliquid sint omnis
                expedita a, deserunt veniam accusamus soluta ullam dolore
                impedit beatae asperiores aspernatur!
              </p>
            </div>
            <div className="flex p-5 space-x-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=Jimmy+García"
                alt="Jimmy García"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-slate-600 leading-4">
                  Jimmy García
                </span>
                <span className="text-sm text-slate-500">Fecha</span>
              </div>
            </div>
          </article>
          <article className="bg-white shadow rounded overflow-hidden">
            <div className="h-52">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/4836371/pexels-photo-4836371.jpeg"
                alt=""
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-sm font-semibold text-sky-500">Vue</h3>
              <h2 className="text-xl font-semibold text-slate-800 leading-tight">
                Desarrollo del Front-End
              </h2>
              <p className="text-slate-500 hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tenetur eos ullam? Ad consequatur hic aliquid sint omnis
                expedita a, deserunt veniam accusamus soluta ullam dolore
                impedit beatae asperiores aspernatur!
              </p>
            </div>
            <div className="flex p-5 space-x-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=Jimmy+García"
                alt="Jimmy García"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-slate-600 leading-4">
                  Jimmy García
                </span>
                <span className="text-sm text-slate-500">Fecha</span>
              </div>
            </div>
          </article>

          <article className="bg-white shadow rounded overflow-hidden">
            <div className="h-52">
              <img
                className="h-full w-full object-cover object-center"
                src="https://images.pexels.com/photos/16412236/pexels-photo-16412236/free-photo-of-ciudad-vacaciones-calle-edificio.jpeg"
                alt=""
              />
            </div>
            <div className="p-5 space-y-3">
              <h3 className="text-sm font-semibold text-sky-500">React</h3>
              <h2 className="text-xl font-semibold text-slate-800 leading-tight">
                Desarrollo del Front-end
              </h2>
              <p className="text-slate-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                tenetur eos ullam? Ad consequatur hic aliquid sint omnis
                expedita a, deserunt veniam accusamus soluta ullam dolore
                impedit beatae asperiores aspernatur!
              </p>
            </div>
            <div className="flex p-5 space-x-2">
              <img
                className="h-10 w-10 rounded-full"
                src="https://ui-avatars.com/api?name=Jimmy+García"
                alt="Jimmy García"
              />
              <div className="flex flex-col justify-center">
                <span className="text-sm font-semibold text-slate-600 leading-4">
                  Jimmy García
                </span>
                <span className="text-sm text-slate-500">Fecha</span>
              </div>
            </div>
          </article>
        </div>

        <h2
          onClick={() => navigate("/update/" + video._id)}
          className="text-3xl"
        >
          {video.title}
        </h2>
        <p className="text-2xl">{video.description}</p>
        <span onClick={() => video._id && handleDelete(video._id)}>X</span>
        <ReactPlayer url={video.url} />
      </main>
      <footer className="py-10">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:max-w-6xl mx-auto md:space-y-0">
          <div className="text-center text-sm text-slate-600">
            2023 All Rights Reserved
          </div>
          <div className="flex space-x-4">
            <a href="">
              <svg
                className="w-6 text-slate-600 fill-current duration-300 hover:text-[#1877F2]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Facebook</title>
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-6 text-slate-600 fill-current duration-300 hover:text-[#03A9F4]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-6 text-slate-600 fill-current duration-300 hover:text-[#E4405F]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-6 text-slate-600 fill-current duration-300 hover:text-[#181717]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Git</title>
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
              </svg>
            </a>
            <a href="">
              <svg
                className="w-6 text-slate-600 fill-current duration-300 hover:text-[#25D366]"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default VideoItem;
