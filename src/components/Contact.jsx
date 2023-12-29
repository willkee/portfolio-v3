import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { contactLinks } from "../constants";

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({ name: "", email: "", message: "" });

	const [loading, setLoading] = useState(false);

	const service = import.meta.env.VITE_EMAILJS_SERVICE;
	const template = import.meta.env.VITE_EMAILJS_TEMPLATE;
	const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				service,
				template,
				{
					from_name: form.name,
					to_name: "Will Kee",
					from_email: form.email,
					to_email: "will.kee.dev@gmail.com",
					message: form.message,
				},
				key
			)
			.then(
				() => {
					setLoading(false);
					alert(
						"Thank you. I will get back to you as soon as possible."
					);
					setForm({ name: "", email: "", message: "" });
				},
				(err) => {
					setLoading(false);
					console.log(err);
					alert("Something went wrong. Please try again.");
				}
			);
	};

	return (
		<>
			<div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
				<motion.div
					variants={slideIn("left", "tween", 0.2, 1)}
					className="flex-[0.75] bg-black-100 p-8 rounded-2xl min-w-[300px]"
				>
					<p className={styles.sectionSubText}>Contact</p>
					<h3 className={`${styles.sectionHeadText}`}>Links.</h3>
					<div className=" bg-black-100 rounded-2xl w-full flex justify-evenly items-center h-24 mt-10">
						{contactLinks.slice(0, 2).map(({ name, src, url }) => (
							<div
								key={name}
								className="hover:opacity-100 rounded-full w-12 h-12 opacity-30 cursor-pointer items-center flex justify-center"
								onClick={url}
							>
								<img
									src={src}
									alt={name}
									className="w-12 h-12"
								/>
							</div>
						))}
					</div>
					<div className=" bg-black-100 rounded-2xl w-full flex justify-evenly items-center h-24">
						{contactLinks.slice(2).map(({ name, src, url }) => (
							<div
								key={name}
								className="hover:opacity-100 rounded-full w-12 h-12 opacity-30 cursor-pointer items-center flex justify-center"
								onClick={url}
							>
								<img
									src={src}
									alt={name}
									className="w-12 h-12"
								/>
							</div>
						))}
					</div>
					{/* <form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col gap-8"
					>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">
								Your Name
							</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								placeholder="What's your name?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">
								Your Email
							</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								placeholder="What's your email?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
							/>
						</label>
						<label className="flex flex-col">
							<span className="text-white font-medium mb-4">
								Your Message
							</span>
							<textarea
								rows={7}
								name="message"
								value={form.message}
								onChange={handleChange}
								placeholder="What do you want to say?"
								className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none"
							/>
						</label>
						<button
							type="submit"
							className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
						>
							{loading ? "Sending..." : "Send"}
						</button>
					</form> */}
				</motion.div>
				<motion.div
					variants={slideIn("right", "tween", 0.2, 1)}
					className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
				>
					<EarthCanvas />
				</motion.div>
			</div>
			{/* <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden text-white mt-10">
				<motion.div
					variants={slideIn("up", "tween", 0.2, 1)}
					className=" bg-black-100 p-8 rounded-2xl w-full flex justify-evenly items-center"
				>
					{contactLinks.map(({ name, src, url }) => (
						<div
							key={name}
							className="hover:opacity-100 rounded-full w-10 h-10 opacity-30 cursor-pointer"
							onClick={url}
						>
							<img src={src} alt={name} className="w-10 h-10" />
						</div>
					))}
				</motion.div>
			</div> */}
		</>
	);
};

const ContactWrapper = SectionWrapper(Contact, "contact");
export default ContactWrapper;
