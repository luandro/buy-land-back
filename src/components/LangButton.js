import React from "react";
import { useTranslation } from "react-i18next";

const LangButton = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (event) => {
		i18n.changeLanguage(event.target.value);
	};

	return (
		<select
			value={i18n.language}
			onChange={changeLanguage}
			className="absolute top-2.5 right-2.5 z-10 bg-[#a98467] text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-[#6c584c] hover:scale-105"
		>
			<option value="en">English</option>
			<option value="es">Español</option>
			<option value="pt">Português</option>
		</select>
	);
};

export default LangButton;
