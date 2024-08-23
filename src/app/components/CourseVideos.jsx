

const CourseVideos = ({ videoUrl }) => {
    const videoId = videoUrl.split('v=')[1]?.split('&')[0]; // Extracts the video ID from the URL

    if (!videoId) {
        return <p>Invalid YouTube URL</p>;
    }


    return (
        <div className="bg- w-[250px] h-[250px] ">
            {/* <iframe
            className=""

                src={`https://www.youtube.com/embed/${videoId}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe> */}

s
        </div>
    )
}

export default CourseVideos