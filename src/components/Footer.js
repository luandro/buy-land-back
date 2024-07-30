import React from "react";
import i18next from "../i18n";

const Footer = () => (
	<footer className="bg-[#a98467] py-4">
		<div className="container mx-auto text-center">
			<p className="text-[#f0ead2]">
				&copy; {new Date().getFullYear()} {i18next.t("footer.text")}
			</p>
		</div>
	</footer>
);

export default Footer;
