import React from "react";

const Subtopics = ({ topic, updateSubtopicStatus }) => {
  return (
    <div className="bg-cyan-100 p-4 rounded-b-lg">
      <h3 className="text-lg font-semibold mb-3">Sub Topics</h3>
      <table className="w-full border border-gray-300 rounded-lg bg-white">
        <thead>
          <tr className="bg-gray-200 text-gray-700 text-left">
            <th className="border p-2">Name</th>
            <th className="border p-2">LeetCode Link</th>
            <th className="border p-2">YouTube Link</th>
            <th className="border p-2">Article Link</th>
            <th className="border p-2">Level</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {topic.subtopics.map((s) => (
            <tr key={s._id} className="text-center">
              <td className="border p-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={s.status === "Done"}
                  onChange={() => updateSubtopicStatus(topic._id, s._id)}
                />
                {s.title}
              </td>
              <td className="border p-2">
                <a
                  href={s.leetlink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Practise
                </a>
              </td>
              <td className="border p-2">
                <a
                  href={s.ytlink}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch
                </a>
              </td>
              <td className="border p-2">
                <a
                  href={s.article}
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read
                </a>
              </td>
              <td className="border p-2">{s.level}</td>
              <td className="border p-2">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    s.status === "Done"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Subtopics;
