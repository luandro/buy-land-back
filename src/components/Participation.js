import React from "react";
import { Element } from "react-scroll";
import i18next from "../i18n";
import Divider from "./Divider";

const Participation = () => (
	<Element name="participate">
		<section className="participation bg-[#a98467]" id="participation">
			<Divider color="#adc178" direction="down" />
			<div className="container mx-auto px-4 pt-24">
				<h2 className="text-3xl font-bold mb-6 text-[#f0ead2]">
					{i18next.t("participation.title")}
				</h2>
				<p className="text-lg mb-8 text-[#f0ead2] lg:max-w-3xl mx-auto">
					{i18next.t("participation.description")}
				</p>
				<a
					href="/participate"
					className="mt-8 px-6 py-3 bg-[#6c584c] text-[#f0ead2] rounded-full inline-block hover:text-gray-900 hover:bg-[#adc178]"
				>
					{i18next.t("participation.button")}
				</a>
			</div>
		</section>
	</Element>
);

export default Participation;
