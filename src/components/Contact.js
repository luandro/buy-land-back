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
						className={`bg-[#a98467] py-4 px-12 text-lg font-medium text-center text-white uppercase rounded-lg sm:w-fit focus:ring-4 focus:outline-none ${
							{
								sending: "bg-[#adc178] cursor-not-allowed",
								fail: "bg-red-700]",
								default:
									"bg-[#adc178] hover:bg-[#dde5b4] dark:bg-[#6c584c] dark:hover:bg-[#a98467]",
							}[status]
						}`}
						disabled={status === "sending"}
					>
						{status === "fail" && setTimeout(() => setStatus("idle"), 3000)}
						{i18next.t("contact.sendButton")}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
