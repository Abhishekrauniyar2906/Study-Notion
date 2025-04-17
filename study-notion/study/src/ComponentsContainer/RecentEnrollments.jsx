import { motion } from "framer-motion";

const RecentEnrollments = ({ enrollments }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 "
  >
    <h2 className="text-xl font-semibold mb-4">📝 Recent Enrollments</h2>
    <ul className="space-y-3">
      {enrollments.map((item, idx) => (
        <li key={idx} className="flex justify-betweenbg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 ">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-gray-400">{item.course}</p>
          </div>
          <span className="text-xs text-gray-400">{item.time}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default RecentEnrollments;
