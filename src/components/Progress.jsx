// import React, { useEffect, useState } from "react";
// import dummyTopics from "../utils/dummyTopics";

// const Progress = () => {
//   const [progress, setProgress] = useState(null);

//   useEffect(() => {
//     // Flatten all subtopics
//     const allSubtopics = dummyTopics.flatMap((topic) => topic.subtopics);

//     const total = allSubtopics.length;
//     const completed = allSubtopics.filter((s) => s.status === "Done").length;

//     // Level-wise counts
//     const levels = ["EASY", "MEDIUM", "HARD"];
//     const levelProgress = levels.map((level) => {
//       const levelSubtopics = allSubtopics.filter((s) => s.level === level);
//       const done = levelSubtopics.filter((s) => s.status === "Done").length;
//       const percent = levelSubtopics.length
//         ? Math.round((done / levelSubtopics.length) * 100)
//         : 0;
//       return { level, total: levelSubtopics.length, done, percent };
//     });

//     setProgress({ total, completed, levelProgress });
//   }, []);

//   if (!progress) {
//     return <p className="p-6 text-gray-600">Loading progress...</p>;
//   }

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold text-blue-700 mb-4">Progress</h1>

//       {/* Overall Progress */}
//       <div className="bg-white shadow-md p-4 rounded-lg mb-6 border border-gray-200">
//         <p className="text-lg">
//           <strong>Total Subtopics:</strong> {progress.total}
//         </p>
//         <p className="text-lg">
//           <strong>Completed:</strong> {progress.completed}
//         </p>
//         <p className="text-lg">
//           <strong>Overall Completion:</strong>{" "}
//           <span
//             className={`font-semibold ${
//               progress.completed === progress.total
//                 ? "text-green-600"
//                 : progress.completed / progress.total > 0.5
//                 ? "text-blue-600"
//                 : "text-red-600"
//             }`}
//           >
//             {Math.round((progress.completed / progress.total) * 100)}%
//           </span>
//         </p>

//         {/* Overall Progress Bar */}
//         <div className="w-full bg-gray-300 rounded h-4 mt-3">
//           <div
//             className="bg-green-500 h-4 rounded"
//             style={{
//               width: `${Math.round((progress.completed / progress.total) * 100)}%`,
//             }}
//           ></div>
//         </div>
//       </div>

//       {/* Level-wise Progress */}
//       <h2 className="text-xl font-semibold mb-3">Progress by Level</h2>
//       <div className="space-y-4">
//         {progress.levelProgress.map((lvl) => (
//           <div
//             key={lvl.level}
//             className="bg-white shadow-md rounded-lg border border-gray-200 p-4"
//           >
//             <div className="flex justify-between items-center mb-2">
//               <h3 className="text-lg font-semibold text-gray-700">{lvl.level}</h3>
//               <span
//                 className={`text-sm font-bold px-3 py-1 rounded-full ${
//                   lvl.percent === 100
//                     ? "bg-green-100 text-green-600"
//                     : lvl.percent >= 50
//                     ? "bg-blue-100 text-blue-600"
//                     : "bg-red-100 text-red-600"
//                 }`}
//               >
//                 {lvl.percent}%
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 rounded h-3">
//               <div
//                 className="bg-blue-500 h-3 rounded"
//                 style={{ width: `${lvl.percent}%` }}
//               ></div>
//             </div>
//             <p className="text-sm mt-1 text-gray-600">
//               {lvl.done} of {lvl.total} subtopics completed
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Progress;



import React, { useEffect, useState } from "react";
import dummyTopics from "../utils/dummyTopics";

const Progress = () => {
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    const allSubtopics = dummyTopics.flatMap((topic) => topic.subtopics);

    const total = allSubtopics.length;
    const completed = allSubtopics.filter((s) => s.status === "Done").length;

    const levels = ["EASY", "MEDIUM", "HARD"];
    const levelProgress = levels.map((level) => {
      const levelSubtopics = allSubtopics.filter((s) => s.level === level);
      const done = levelSubtopics.filter((s) => s.status === "Done").length;
      const percent = levelSubtopics.length
        ? Math.round((done / levelSubtopics.length) * 100)
        : 0;
      return { level, total: levelSubtopics.length, done, percent };
    });

    setProgress({ total, completed, levelProgress });
  }, []);

  if (!progress) return <p className="p-4 text-gray-600">Loading progress...</p>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-blue-700 mb-4">Progress</h1>

      {/* Overall Completion */}
      <div className="bg-gray-100 p-3 rounded mb-4 border border-gray-200">
        <p className="text-sm font-medium">
          Overall:{" "}
          <span className="font-bold text-blue-600">
            {Math.round((progress.completed / progress.total) * 100)}%
          </span>
        </p>
        <div className="bg-gray-300 rounded h-2 mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${Math.round((progress.completed / progress.total) * 100)}%` }}
          ></div>
        </div>
      </div>

      {/* Level-wise Progress */}
      <h2 className="text-lg font-semibold mb-2">By Level</h2>
      <div className="space-y-2">
        {progress.levelProgress.map((lvl) => (
          <div key={lvl.level} className="bg-gray-100 p-2 rounded border border-gray-200">
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-700">{lvl.level}</span>
              <span className="text-sm font-bold text-gray-600">{lvl.percent}%</span>
            </div>
            <div className="bg-gray-300 rounded h-2">
              <div
                className={`h-2 rounded ${
                  lvl.percent === 100
                    ? "bg-green-500"
                    : lvl.percent >= 50
                    ? "bg-blue-500"
                    : "bg-red-500"
                }`}
                style={{ width: `${lvl.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
