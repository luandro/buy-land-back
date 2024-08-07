import React from "react";
import Video from "../assets/vid/video-2.mp4";
import i18next from "../i18n";
import Divider from "./Divider";

const VideoSection = () => (
	<section className="video pb-12 bg-[#adc178]">
		<Divider color="#f0ead2" direction="right" />
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-6 pt-24 text-center text-[#6c584c]">
				{i18next.t("video.title")}
			</h2>
			<div className="flex justify-center">
				<video
					controls
					className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-lg"
				>
					<source src={Video} type="video/mp4" />
					<track
						kind="captions"
						srcLang="en"
						src="../assets/vid/captions_en.vtt"
						label="English"
					/>
					{i18next.t("video.noSupport")}
				</video>
			</div>
		</div>
	</section>
);

export default VideoSection;
