import React from "react";
import i18next from "../i18n";

const Contact = () => (
	<section className="contact py-12 bg-[#dde5b4]">
		<div className="container mx-auto px-4">
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
