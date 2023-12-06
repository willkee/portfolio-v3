import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
				className="w-full bg-gradient-to-br from-green-400 to-blue-500 p-1 rounded-[20px] shadow-card"
			>
				<div
					options={{ max: 5, scale: 1, speed: 650 }}
					className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
				>
					<img
						src={icon}
						alt={title}
						className="w-16 h-16 object-contain"
					/>
					<h3 className="text-white text-[20px] font-bold text-center">
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	);
};
const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px]"
			>
				I am a skilled software engineer with a passion for building web
				applications and solving problems. I have experience working
				with JavaScript and TypeScript, as well as React.js, Redux,
				Node.js and Express.js. I am a quick learner and I am always
				looking to expand my skill set and learn new technologies. I
				collaborate closely with teams to create efficient,
				user-friendly, and scalable solutions to solve real world
				problems.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, idx) => (
					<ServiceCard key={service.title} index={idx} {...service} />
				))}
			</div>
		</>
	);
};

const AboutWrapper = SectionWrapper(About, "about");
export default AboutWrapper;
