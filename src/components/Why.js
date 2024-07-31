import React from "react";
import { useTranslation } from "react-i18next";
import Divider from "./Divider";
const Why = () => {
	const { t } = useTranslation();

	return (
		<section className="why pb-32 bg-[#f0ead2]">
			<Divider />
			<div className="container mx-auto px-4 pt-24 lg:max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold mb-6 text-[#6c584c]">
					{t("why.title")}
				</h2>
				<p className="text-lg mb-4 text-[#6c584c]">{t("why.description1")}</p>
				<p className="text-lg text-[#6c584c]">{t("why.description2")}</p>
			</div>
		</section>
	);
};

export default Why;
