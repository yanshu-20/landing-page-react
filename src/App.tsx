import React, { useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ExistingCourses from "./components/ExistingCourses";
import NewCourse from "./components/NewCourses";

const App: React.FC = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: "React Basics", description: "Learn the basics of React." },
    { id: 2, name: "Advanced TypeScript", description: "Master TypeScript for large projects." },
  ]);

  const addCourse = (course: { name: string; description: string }) => {
    setCourses([...courses, { ...course, id: courses.length + 1 }]);
  };

  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <div className="container mx-auto py-6">
        <NewCourse onAddCourse={addCourse} />
        <ExistingCourses courses={courses} />
      </div>
    </div>
  );
};

export default App;
