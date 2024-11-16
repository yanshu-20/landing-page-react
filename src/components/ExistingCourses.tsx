// src/components/ExistingCourses.tsx
import React from "react";

interface Course {
  id: number;
  name: string;
  description: string;
}

interface ExistingCoursesProps {
  courses: Course[];
}

const ExistingCourses: React.FC<ExistingCoursesProps> = ({ courses }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Existing Courses</h2>
      <ul className="space-y-4">
        {courses.map((course) => (
          <li key={course.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">{course.name}</h3>
            <p className="text-gray-600">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingCourses;
