const Gallery = ({ images }) => {
    return (
        <div className="bg-black w-full" >
            <ul className="flex flex-1 gap-10 overflow-scroll pt-[clamp(1.875rem,_1.1268rem_+_3.1925vw,_4rem)] px-[clamp(1.875rem,_1.1268rem_+_3.1925vw,_4rem)]">
                {images.map((image, index) => (
                    <li key={index} className="bg-gray-400 w-[clamp(15rem,_13.6796rem_+_5.6338vw,_18.75rem)] shrink-0">
                        <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Gallery;
