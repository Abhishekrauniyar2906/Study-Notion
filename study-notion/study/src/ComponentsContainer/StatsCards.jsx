import { motion } from "framer-motion";

const StatsCards = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl p-5 shadow-sm flex items-center gap-4"
        >
          <div className="text-3xl text-blue-400">{stat.icon}</div>
          <div>
            <h3 className="text-sm text-gray-400">{stat.title}</h3>
            <p className="text-xl font-bold">{stat.value}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsCards;
