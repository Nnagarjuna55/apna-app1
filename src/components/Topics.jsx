import React, { useState, useEffect } from "react";
import dummyTopics from "../utils/dummyTopics";
import Subtopics from "./Subtopics";

const Topics = () => {
  const [topics, setTopics] = useState([]);
  const [expandedTopicId, setExpandedTopicId] = useState(null);

  useEffect(() => {
    setTopics(dummyTopics);
  }, []);

  const toggleTopic = (id) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  const updateSubtopicStatus = (topicId, subtopicId) => {
    const updatedTopics = topics.map((topic) => {
      if (topic._id === topicId) {
        topic.subtopics = topic.subtopics.map((s) =>
          s._id === subtopicId
            ? { ...s, status: s.status === "Done" ? "Pending" : "Done" }
            : s
        );
      }
      return topic;
    });
    setTopics(updatedTopics);
  };

  const isTopicCompleted = (topic) => {
    return topic.subtopics.every((s) => s.status === "Done");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center text-blue-700">Topics</h1>
      <p className="text-center text-gray-500 mb-6">
        Explore these exciting topics!
      </p>

      {topics.map((topic) => (
        <div
          key={topic._id}
          className="bg-cyan-400 mb-3 rounded-lg shadow-md"
        >
          <div
            className="flex justify-between items-center p-4 cursor-pointer"
            onClick={() => toggleTopic(topic._id)}
          >
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-semibold text-white">{topic.title}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  isTopicCompleted(topic)
                    ? "bg-green-600 text-white"
                    : "bg-red-600 text-white"
                }`}
              >
                {isTopicCompleted(topic) ? "Completed" : "Pending"}
              </span>
            </div>
            <span className="text-white">
              {expandedTopicId === topic._id ? "▲" : "▼"}
            </span>
          </div>

          {expandedTopicId === topic._id && (
            <Subtopics
              topic={topic}
              updateSubtopicStatus={updateSubtopicStatus}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Topics;
