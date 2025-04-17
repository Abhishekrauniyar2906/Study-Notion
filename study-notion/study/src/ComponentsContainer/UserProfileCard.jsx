import { motion } from "framer-motion";
import Abhi from '../assets/Abhi.png';

const UserProfileCard = () => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-zinc-950 drop-shadow-sm shadow-blue-200 backdrop-blur-sm border
     border-zinc-900
     rounded-2xl  shadow-sm p-6 
     flex flex-wrap md:flex-nowrap items-center gap-4"
  >
    <img src={Abhi} alt="Profile picture of Abhishek Rauniyar" className="w-40 h-20 rounded-full border-2 border-white" />
    <div>
      <h2 className="text-xl font-bold">Abhishek Rauniyar</h2>
      <p className="text-sm text-gray-400">AI/ML Student</p>
      <button className="mt-2 px-4 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-sm transition focus:outline-none">
        View Profile
      </button>
    </div>
  </motion.div>
);

export default UserProfileCard;
