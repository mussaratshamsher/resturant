'use client'  
// components/PlayButton.tsx  
import { useRef, useState } from 'react';  

// Define the props type  
interface PlayButtonProps {  
    src: string; // Type for the video source  
}  

const PlayButton: React.FC<PlayButtonProps> = ({ src }) => {  
    const videoRef = useRef<HTMLVideoElement | null>(null);  
    const [isHovered, setIsHovered] = useState<boolean>(false); // State to track hover status  
    const [isPlaying, setIsPlaying] = useState<boolean>(false); // State to track if video is playing  

    const handlePlayButtonClick = () => {  
        if (videoRef.current) { // Check if videoRef.current is not null  
            if (videoRef.current.paused) {  
                videoRef.current.play();  
                setIsPlaying(true); // Update playing state  
            } else {  
                videoRef.current.pause();  
                setIsPlaying(false); // Update playing state  
            }  
        }  
    };  

    const handleVideoEnd = () => {  
        setIsPlaying(false); // Update playing state when video ends  
    };  

    return (  
        <div   
            className="relative"   
            onMouseEnter={() => setIsHovered(true)} // Set hover state on mouse enter  
            onMouseLeave={() => setIsHovered(false)} // Reset hover state on mouse leave  
        >  
            <video  
                ref={videoRef}  
                className="border rounded-md"  
                loop  
                onEnded={handleVideoEnd}  
            >  
                <source src={src} type="video/mp4" />  
                Your browser does not support the video tag.  
            </video>  
            {/* Play/Pause button */}  
            <div  
                className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   
                flex items-center justify-center w-16 h-16 bg-rose-500 bg-opacity-50 rounded-full cursor-pointer ${isHovered || !isPlaying ? 'flex' : 'hidden'}`}  
                onClick={handlePlayButtonClick}  
            >  
                <span className="text-white text-3xl">{isPlaying ? '❚❚' : '▶'}</span> {/* Toggle between Play and Pause Icons */}  
            </div>  
        </div>  
    );  
};  

export default PlayButton;