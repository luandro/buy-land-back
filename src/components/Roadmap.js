import React from "react";
import i18next from "../i18n";
import Divider from "./Divider";

const CalendarSvg = () => (
	<svg
		className="w-2.5 h-2.5 text-[#adc178]"
		aria-hidden="true"
		xmlns="http://www.w3.org/2000/svg"
		fill="currentColor"
		viewBox="0 0 20 20"
	>
		<path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
	</svg>
);
const CheckSvg = () => (
	<svg
		className="fill-current"
		xmlns="http://www.w3.org/2000/svg"
		width="12"
		height="10"
		aria-label="Check mark"
	>
		<title>Check mark</title>
		<path d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z" />
	</svg>
);

const Roadmap = () => {
	const roadmapItems = i18next.t("roadmap.items", { returnObjects: true });

	if (!Array.isArray(roadmapItems)) {
		console.error("roadmap.items is not an array");
		return null;
	}

	return (
		<section className="roadmap pb-24 bg-[#adc178]">
			<Divider color="#dde5b4" />
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-24 pt-24 text-center text-[#6c584c]">
					{i18next.t("roadmap.title")}
				</h2>
				<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
					{roadmapItems.map((item, index) => (
						<div
							key={item.description}
							className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
						>
							<div
								className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${item.check ? "bg-green-500" : "bg-slate-300"} group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}
							>
								{item.check ? <CheckSvg /> : <CalendarSvg />}{" "}
							</div>
							<div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
								<div className="flex items-center justify-between space-x-2 mb-1">
									<div
										className={`md:text-lg text-[#adc178] ${index % 2 !== 0 && "md:order-2"}`}
									>
										{item.year}
									</div>
									<time className="font-caveat font-semibold uppercase md:text-lg text-[#6c584c]">
										{item.title}
									</time>
								</div>
								<div className="text-slate-500">{item.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
