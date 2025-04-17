import StatsCards from "../ComponentsContainer/StatsCards";
import UserProfileCard from "../ComponentsContainer/UserProfileCard";
import CourseProgressChart from "../ComponentsContainer/CourseProgressChart";
import RecentEnrollments from "../ComponentsContainer/RecentEnrollments";
import ActivitySummary from "../ComponentsContainer/ActivitySummary";
import Notifications from "../ComponentsContainer/Notifications";
import TopCourses from "../ComponentsContainer/TopCourses";
import ExtraWidgetsMenu from "../ComponentsContainer/ExtraWidgetsMenu";

import {
  FaUserGraduate,
  FaBook,
  FaChartLine,
  FaUserShield,
} from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    { title: "Total Students", value: "1,024", icon: <FaUserGraduate /> },
    { title: "Courses", value: "38", icon: <FaBook /> },
    { title: "Visitors Today", value: "842", icon: <FaChartLine /> },
    { title: "Admins", value: "3", icon: <FaUserShield /> },
  ];

  const recentEnrollments = [
    { name: "Riya Singh", course: "Data Structures", time: "2h ago" },
    { name: "Aman Verma", course: "AI Basics", time: "4h ago" },
    { name: "Nikhil Roy", course: "React Essentials", time: "5h ago" },
  ];

  return (
    <div className="min-h-screen dark:bg-black text-white p-4 sm:p-8 space-y-10 w-full">
      <h1 className="text-3xl font-bold">📊 Dashboard Overview</h1>

      {/* Stats Cards */}
      <StatsCards stats={stats} />

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {/* User Profile Card */}
        <UserProfileCard />
        {/* Course Progress Chart */}
        <CourseProgressChart />
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {/* Recent Enrollments */}
        <RecentEnrollments enrollments={recentEnrollments} />
        {/* Top Courses */}
        <TopCourses />
      </div>

      {/* Activity Summary */}
      <ActivitySummary />
      {/* Notifications */}
      <Notifications />

      {/* Extra Features Menu */}
      <ExtraWidgetsMenu />
    </div>
  );
};

export default Dashboard;
