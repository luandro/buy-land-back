import React from "react";
import { useTranslation } from "react-i18next";
import image1 from "../assets/img/f_1.jpg";
import image2 from "../assets/img/f_2.jpg";
import image3 from "../assets/img/f_3.jpg";
import image4 from "../assets/img/f_4.jpg";
import image5 from "../assets/img/f_5.jpg";
import { ReactComponent as Arrow } from "../assets/img/noun-curved-arrow-4120281.svg";
import Divider from "./Divider";

const How = () => {
	const { t } = useTranslation();

	const planItems = [
		{ image: image1, alt: t("how.step1.alt"), text: t("how.step1.text") },
		{ image: image2, alt: t("how.step2.alt"), text: t("how.step2.text") },
		{ image: image3, alt: t("how.step3.alt"), text: t("how.step3.text") },
		{ image: image4, alt: t("how.step4.alt"), text: t("how.step4.text") },
		{ image: image1, alt: t("how.step6.alt"), text: t("how.step6.text") },
		{ image: image5, alt: t("how.step5.alt"), text: t("how.step5.text") },
	];

	return (
		<section className="how pb-12 bg-[#f0ead2]">
			<Divider color="#dde5b4" />
			<div className="container mx-auto px-4 text-center">
				<section className="py-12 sm:py-16 lg:py-20 xl:py-24">
					<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
						<div className="text-center">
							<p className="text-sm font-bold uppercase tracking-widest text-gray-700">
								{t("how.mini-title")}
							</p>
							<h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
								{t("how.title")}
							</h2>
							<p className="mx-auto mt-4 max-w-2xl text-lg font-normal text-gray-700 lg:text-xl lg:leading-8">
								{t("how.description")}
							</p>
						</div>
						<ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-y-20 gap-x-10 sm:mt-16 lg:mt-20 lg:max-w-5xl lg:grid-cols-4">
							{planItems.map((item) => (
								<li
									key={item.text}
									className="flex-start group relative flex lg:flex-col"
								>
									<span
										className="absolute left-[18px] top-14 h-[calc(100%_-_32px)] w-px bg-gray-300 lg:right-0 lg:left-auto lg:top-[18px] lg:h-px lg:w-[calc(100%_-_72px)]"
										aria-hidden="true"
									/>
									<div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gray-300 bg-gray-50 transition-all duration-200 group-hover:border-gray-900 group-hover:bg-gray-900">
										<svg
											viewBox="0 0 4 4"
											className="h-5 w-5 text-gray-600 group-hover:text-white"
											aria-hidden="true"
										>
											<circle cx="2" cy="2" r="2" fill="currentColor" />
										</svg>
									</div>
									<div className="ml-6 lg:ml-0 lg:mt-10">
										<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
											{item.alt}
										</h3>
										<h4 className="mt-2 text-base text-gray-700">
											{item.text}
										</h4>
									</div>
								</li>
							))}
							<Arrow
								className="hidden md:block relative -top-16 left-24"
								src={image5}
							/>
						</ul>
					</div>
				</section>
			</div>
		</section>
	);
};

export default How;
