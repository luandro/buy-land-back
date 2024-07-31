import React from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";
import { Link } from "react-scroll";
import Logo from "../assets/img/noun-geodesic-dome-2185259.cleaned.svg";
import Video from "../assets/vid/video.mp4";

const Header = () => {
	const { t } = useTranslation();

	return (
		<div>
			<header className="relative -bottom-14 py-32 -mt-14 bg-[#adc178]">
				<div className="absolute inset-0 w-full h-full overflow-hidden">
					<video
						autoPlay
						muted
						loop
						id="headerVideo"
						className="w-full h-full object-cover"
						type="video/mp4"
						src={Video}
					/>
					<div className="absolute inset-0 bg-[#6c584c] opacity-50" />
				</div>
				<div className="relative container mx-auto text-center md:py-10">
					<div className="flex justify-center">
						<img src={Logo} alt="Logo" className="h-[auto] w-[250px]" />
					</div>
					<h1 className="lg:text-5xl md:text-4xl font-bold px-4 text-white max-w-prose mx-auto text-3xl leading-relaxed">
						{t("header.title")}
					</h1>
					<p className="text-lg mx-auto text-[#f0ead2] px-4 mt-4 font-bold">
						{t("header.subtitle")}
					</p>
					<Link
						to="participate"
						smooth={true}
						duration={500}
						className="cursor-pointer mt-8 px-6 py-3 bg-[#a98467] text-[#f0ead2] rounded-full inline-block hover:bg-[#6c584c]"
					>
						{t("header.participate")}
					</Link>
				</div>
			</header>
			<div className="transition-div" />
		</div>
	);
};

export default Header;
