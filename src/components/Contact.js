import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import i18next from "../i18n";
import Divider from "./Divider";

const Contact = () => {
	const form = useRef();
	const [status, setStatus] = useState("idle"); // idle, sending, success, error

	const sendEmail = (e) => {
		e.preventDefault();
		setStatus("sending");

		emailjs
			.sendForm(
				"service_heclz6t",
				"template_r2aibbn",
				form.current,
				"PJ7h720u7Iy2mUUIF",
			)
			.then(
				() => {
					setStatus("success");
					form.current.reset(); // Clear the form after successful submission
					console.log("SUCCESS!");
				},
				(error) => {
					setStatus("error");
					console.log("FAILED...", error.text);
				},
			);
	};

	return (
		<section className="bg-[#6c584c]">
			<Divider color="#a98467" direction="down" />
			<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
				<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-200 dark:text-white">
					{i18next.t("contact.title")}
				</h2>
				<p className="mb-8 lg:mb-16 font-light text-center text-gray-100 sm:text-xl">
					{i18next.t("contact.description")}
				</p>
				<form ref={form} onSubmit={sendEmail} className="space-y-8">
					{[
						{
							id: "user_name",
							type: "text",
							label: i18next.t("contact.nameLabel"),
							required: true,
						},
						{
							id: "user_email",
							type: "email",
							label: i18next.t("contact.emailLabel"),
							required: true,
						},
						{
							id: "user_message",
							name: "message",
							type: "textarea",
							label: i18next.t("contact.messageLabel"),
							required: true,
						},
					].map((input) => (
						<div
							key={input.id}
							className="flex flex-col items-center sm:flex-row sm:items-start"
						>
							<label
								htmlFor={input.id}
								className="block text-center py-4 px-8 mb-4 text-sm sm:text-right sm:py-3 sm:pr-6 sm:-mr-2 sm:w-48 font-medium text-gray-100 dark:text-gray-300 border-2 border-white animate-pulse"
							>
								{input.label}
							</label>
							{input.type === "textarea" ? (
								<textarea
									id={input.id}
									name={input.name}
									className="shadow-sm bg-gray-50 border-white border-4 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 h-72 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light sm:w-96"
									required={input.required}
								/>
							) : (
								<input
									type={input.type}
									id={input.id}
									name={input.id}
									className="shadow-sm bg-gray-50 border-white border-4 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light sm:w-96"
									required={input.required}
								/>
							)}
						</div>
					))}
					<button
						type="submit"
						className={`cursor-pointer py-4 px-12 text-lg mx-auto font-medium text-center text-white uppercase rounded-lg sm:w-fit focus:ring-4 focus:outline-none ${
							status === "success"
								? "hidden cursor-not-allowed"
								: status === "sending"
									? "bg-[#adc178] cursor-not-allowed"
									: status === "error"
										? "bg-red-700"
										: "hover:bg-[#adc178] bg-[#a98467]"
						}`}
						disabled={status === "sending" || status === "success"}
					>
						{status === "error" && setTimeout(() => setStatus("idle"), 3000)}
						{i18next.t("contact.sendButton")}
					</button>
					<div
						className={`flex items-center justify-center ${status !== "success" && "hidden"}`}
					>
						<div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
							<svg
								className="w-6 h-6 text-[#adc178]"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<title>Check</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M5 13l4 4L19 7"
								/>
							</svg>
						</div>
					</div>
				</form>
			</div>
		</section>
	);
};

export default Contact;
