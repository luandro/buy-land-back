import React from "react";
import image1 from "../assets/img/image1.jpg";
import image2 from "../assets/img/image2.jpg";
import image3 from "../assets/img/image3.jpg";
import i18next from "../i18n";
// import Feather from '../assets/img/noun-feather-5651696.svg'
const Intro = () => (
	<section className="intro pb-32 bg-[#dde5b4]">
		<div className="container mx-auto px-4">
			<h2 className="text-3xl font-bold mb-6 pt-24 text-center text-[#6c584c]">
				{i18next.t("intro.title")}
			</h2>
			<p className="text-lg mb-8 max-w-screen-md mx-auto py-12 text-[#6c584c]">
				{i18next.t("intro.description")}
			</p>
			<div className="separator my-12 w-full">
				<div className="w-full h-1 bg-gradient-to-r from-[#6c584c] via-[#adc178] to-[#dde5b4]" />
				<div className="flex justify-center mt-2">{/* <Feather /> */}</div>
			</div>

			<div className="intro-categories grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="intro-category">
					<img
						src={image1}
						alt={i18next.t("intro.image1.alt")}
						className="intro-image object-cover rounded-full mx-auto"
					/>
					<div className="intro-text mt-4 text-center">
						<h3 className="text-xl font-bold text-[#6c584c]">
							{i18next.t("intro.image1.title")}
						</h3>
						<h4 className="mt-2 text-[#6c584c]">
							{i18next.t("intro.image1.description")}
						</h4>
					</div>
				</div>
				<div className="intro-category">
					<img
						src={image2}
						alt={i18next.t("intro.image2.alt")}
						className="intro-image object-cover rounded-full mx-auto"
					/>
					<div className="intro-text mt-4 text-center">
						<h3 className="text-xl font-bold text-[#6c584c]">
							{i18next.t("intro.image2.title")}
						</h3>
						<p className="mt-2 text-[#6c584c]">
							{i18next.t("intro.image2.description")}
						</p>
					</div>
				</div>
				<div className="intro-category">
					<img
						src={image3}
						alt={i18next.t("intro.image3.alt")}
						className="intro-image object-cover rounded-full mx-auto"
					/>
					<div className="intro-text mt-4 text-center">
						<h3 className="text-xl font-bold text-[#6c584c]">
							{i18next.t("intro.image3.title")}
						</h3>
						<p className="mt-2 text-[#6c584c]">
							{i18next.t("intro.image3.description")}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default Intro;
