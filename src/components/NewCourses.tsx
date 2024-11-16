// src/components/NewCourse.tsx
import React, { useState } from "react";

interface NewCourseProps {
  onAddCourse: (course: { name: string; description: string }) => void;
}

const NewCourse: React.FC<NewCourseProps> = ({ onAddCourse }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onAddCourse({ name, description });
      setName("");
      setDescription("");
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Course</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Course Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter course name"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700"
        >
          Add Course
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
