const VideoGIF = ({ src, classes }: { src: string; classes: string }) => {
	return (
		<video
			autoPlay={true}
			loop={true}
			muted={true}
			playsInline={true}
			className={classes}
		>
			<source src={src} type="video/mp4" />
		</video>
	);
};

export default VideoGIF;
