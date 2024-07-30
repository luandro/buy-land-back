import React from "react";
import i18next from "../i18n";
import { Element } from "react-scroll";

const Participation = () => (
	<Element name="participate">
		<section className="participation py-12 bg-[#a98467]" id="participation">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold mb-6 text-[#f0ead2]">
					{i18next.t("participation.title")}
				</h2>
				<p className="text-lg mb-8 text-[#f0ead2]">
					{i18next.t("participation.description")}
				</p>
				<a
					href="/participate"
					className="mt-8 px-6 py-3 bg-[#6c584c] text-[#f0ead2] rounded-full inline-block hover:bg-[#a98467]"
				>
					{i18next.t("participation.button")}
				</a>
			</div>
		</section>
	</Element>
);

export default Participation;
