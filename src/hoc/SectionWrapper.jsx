import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, id) =>
	function HOC() {
		return (
			<motion.section
				variants={staggerContainer()}
				initial="hidden"
				whileInView="show"
				viewport={{ once: true, amount: 0.25 }}
				className={`${styles.padding} max-w-7xl mx-auto z-0 relative`}
			>
				<span className="hash-span" id={id}>
					&nbsp;
				</span>
				<Component />
			</motion.section>
		);
	};

export default SectionWrapper;
