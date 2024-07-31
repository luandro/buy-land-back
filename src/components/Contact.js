import React from "react";
import i18next from "../i18n";
import Divider from "./Divider";

const Contact = () => (
	<section className="contact pb-12 bg-[#dde5b4]">
		<Divider color="#a98467" direction="down" />
		<div className="container mx-auto px-4 pt-24">
			<h2 className="text-3xl font-bold mb-6 text-[#6c584c]">
				{i18next.t("contact.title")}
			</h2>
			<p className="text-lg mb-4 text-[#6c584c]">
				{i18next.t("contact.description")}
			</p>
			<p className="text-lg text-[#6c584c]">
				{i18next.t("contact.emailLabel")}
				<a
					href={`mailto:${i18next.t("contact.email")}`}
					className="text-[#6c584c] underline"
				>
					{i18next.t("contact.email")}
				</a>
			</p>
		</div>
	</section>
);

export default Contact;
