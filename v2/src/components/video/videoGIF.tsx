const VideoGIF = ({ src, className }: { src: string; className: string }) => {
	return (
		<video
			autoPlay={true}
			loop={true}
			muted={true}
			playsInline={true}
			className={className}
		>
			<source src={src} type="video/mp4" />
		</video>
	);
};

export default VideoGIF;
