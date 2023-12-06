import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, globe } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	repo_link,
	live_link,
}) => {
	return (
		<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
			<Tilt
				options={{ max: 15, scale: 1, speed: 100 }}
				className="bg-tertiary p-5 rounded-2xl sm:w-[500px] w-full"
			>
				<div className="relative w-full h-[320px]">
					<img
						src={image}
						alt={name}
						className="w-full h-full object-cover rounded-2xl"
					/>
					<div className="absolute inset-0 flex justify-end m-3">
						<div
							className="w-11 h-11 bg-transparent hover:bg-gradient-to-r hover:from-green-200 hover:via-green-300 hover:to-blue-500 hover:transition hover:duration-300 ease-in-out rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(repo_link, "_blank")}
						>
							<div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
								<img
									src={github}
									alt="github"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
						<div
							className="w-11 h-11 bg-transparent hover:bg-gradient-to-r hover:from-green-200 hover:via-green-300 hover:to-blue-500 hover:transition hover:duration-300 ease-in-out rounded-full flex justify-center items-center cursor-pointer"
							onClick={() => window.open(live_link, "_blank")}
						>
							<div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
								<img
									src={globe}
									alt="live site"
									className="w-1/2 h-1/2 object-contain"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<h3 className="text-white font-bold text-[24px]">{name}</h3>
					<p className="mt-2 text-secondary text-[14px] md:min-h-[180px]">
						{description}
					</p>
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag, i) => (
						<p
							key={`${tag.name}-${i}`}
							className={`text-14px ${tag.color} flex items-center`}
						>
							<span className="mr-1 text-[6px]">{"\u2B24"}</span>
							<span className="font-bold">{tag.name}</span>
						</p>
					))}
				</div>
			</Tilt>
		</motion.div>
	);
};
const Projects = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>My work</p>
				<h2 className={styles.sectionHeadText}>Projects.</h2>
			</motion.div>
			<div className="w-full flex">
				<motion.p
					variants={fadeIn("", "", 0.1, 1)}
					className="mt-3 text-secondary text-[17px] max-w-3xlleading-[30px]"
				>
					The following projects showcase my skills through developing
					real-world examples of my work. There is a brief description
					of each project in addition to links to the GitHub
					repository and live sites. It reflects my ability to manage
					projects effectively while working with different
					technologies.
				</motion.p>
			</div>
			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, idx) => (
					<ProjectCard
						key={`project-${idx}`}
						index={idx}
						{...project}
					/>
				))}
			</div>
		</>
	);
};

const ProjectWrapper = SectionWrapper(Projects, "projects");
export default ProjectWrapper;
