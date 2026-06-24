const Video = ({ link }) => {
    return (
        <div className="flex flex-col items-center gap-4 mx-[clamp(1rem,_0.0458rem_+_4.0712vw,_2rem)] my-[clamp(2rem,_1.2958rem_+_3.0047vw,_4rem)]">
            <iframe className="border w-full max-w-[800px] aspect-video" src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    );
};

export default Video;
