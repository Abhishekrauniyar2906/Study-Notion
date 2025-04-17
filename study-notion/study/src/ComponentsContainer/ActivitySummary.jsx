import { motion } from "framer-motion";

const ActivitySummary = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="p-6 bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm"
  >
    <h2 className="text-xl font-semibold mb-3">📈 Activity Summary</h2>
    <p className="text-gray-400">Charts or logs can go here.</p>
  </motion.div>
);

export default ActivitySummary;
