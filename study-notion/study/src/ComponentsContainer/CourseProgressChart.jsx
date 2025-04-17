import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { motion } from "framer-motion";
import 'react-circular-progressbar/dist/styles.css';

const CourseProgressChart = () => (
  <motion.div
    initial={{ x: 20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 flex items-center justify-between"
  >
    <div className="w-24 h-24">
      <CircularProgressbar
        value={75}
        text="75%"
        styles={buildStyles({
          textColor: "#fff",
          pathColor: "#3B82F6",
          trailColor: "#374151",
        })}
      />
    </div>
    <div className="ml-6">
      <h3 className="text-lg font-semibold">Course Progress</h3>
      <p className="text-gray-400 text-sm">75% of course completed.</p>
    </div>
  </motion.div>
);

export default CourseProgressChart;
