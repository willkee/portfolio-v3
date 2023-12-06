import { motion } from "framer-motion";
import { styles } from "../styles";
import { SpaceshipCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
			>
				<div className="flex flex-col justify-center items-center mt-20">
					<div className="w-5 h-5 rounded rounded-full bg-blue-400" />
					<div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-blue-400 to-transparent" />
				</div>

				<div className="mt-20">
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi, I&apos;m <span className="text-blue-400">Will</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100`}>
						I specialize in front-end web applications in ReactJS,
						responsive and user-friendly interfaces, using modern UI
						and UX design principles.
					</p>
				</div>
			</div>
			<SpaceshipCanvas />
			<div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center  z-40">
				<a href="#about">
					<div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
						<motion.div
							animate={{ y: [0, 24, 0] }}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: "loop",
							}}
							className="w-3 h-3 rounded-full bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	);
};

export default Hero;
