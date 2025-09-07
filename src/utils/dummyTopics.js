const dummyTopics = [
  // ================= Algorithms =================
  {
    _id: "1",
    title: "Algorithms",
    subtopics: [
      { _id: "1-1", title: "Sorting Algorithms", leetlink: "https://leetcode.com/tag/sorting/", ytlink: "https://youtu.be/pkkFqlG0Hds", article: "https://www.geeksforgeeks.org/sorting-algorithms/", level: "EASY", status: "Pending" },
      { _id: "1-2", title: "Searching Algorithms", leetlink: "https://leetcode.com/tag/binary-search/", ytlink: "https://youtu.be/4kIG-6CRxEo", article: "https://www.geeksforgeeks.org/searching-algorithms/", level: "EASY", status: "Pending" },
      { _id: "1-3", title: "Dynamic Programming", leetlink: "https://leetcode.com/tag/dynamic-programming/", ytlink: "https://youtu.be/OQ5jsbhAv_M", article: "https://www.geeksforgeeks.org/dynamic-programming/", level: "MEDIUM", status: "Pending" },
      { _id: "1-4", title: "Greedy Algorithms", leetlink: "https://leetcode.com/tag/greedy/", ytlink: "https://youtu.be/arY2NRv6yJk", article: "https://www.geeksforgeeks.org/greedy-algorithms/", level: "MEDIUM", status: "Pending" },
      { _id: "1-5", title: "Divide and Conquer", leetlink: "https://leetcode.com/tag/divide-and-conquer/", ytlink: "https://youtu.be/owLHZZ8viJU", article: "https://www.geeksforgeeks.org/divide-and-conquer/", level: "MEDIUM", status: "Pending" },
      { _id: "1-6", title: "Backtracking", leetlink: "https://leetcode.com/tag/backtracking/", ytlink: "https://youtu.be/az6a1hU7G78", article: "https://www.geeksforgeeks.org/backtracking-algorithms/", level: "HARD", status: "Pending" },
    ],
  },

  // ================= Data Structures =================
  {
    _id: "2",
    title: "Data Structures",
    subtopics: [
      { _id: "2-1", title: "Arrays", leetlink: "https://leetcode.com/tag/array/", ytlink: "https://youtu.be/bYWLJb3vCWY", article: "https://www.geeksforgeeks.org/array-data-structure/", level: "EASY", status: "Pending" },
      { _id: "2-2", title: "Linked List", leetlink: "https://leetcode.com/tag/linked-list/", ytlink: "https://youtu.be/q8gdBn9RPeI", article: "https://www.geeksforgeeks.org/data-structures/linked-list/", level: "MEDIUM", status: "Pending" },
      { _id: "2-3", title: "Stacks", leetlink: "https://leetcode.com/tag/stack/", ytlink: "https://youtu.be/IbvsNF22Ud0", article: "https://www.geeksforgeeks.org/stack-data-structure/", level: "EASY", status: "Pending" },
      { _id: "2-4", title: "Queues", leetlink: "https://leetcode.com/tag/queue/", ytlink: "https://youtu.be/D6q3Fad3T5U", article: "https://www.geeksforgeeks.org/queue-data-structure/", level: "EASY", status: "Pending" },
      { _id: "2-5", title: "Trees", leetlink: "https://leetcode.com/tag/tree/", ytlink: "https://youtu.be/fAAZixBzIAI", article: "https://www.geeksforgeeks.org/binary-tree-data-structure/", level: "HARD", status: "Pending" },
      { _id: "2-6", title: "Graphs", leetlink: "https://leetcode.com/tag/graph/", ytlink: "https://youtu.be/09_LlHjoEiY", article: "https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/", level: "HARD", status: "Pending" },
    ],
  },

  // ================= Databases =================
  {
    _id: "3",
    title: "Databases",
    subtopics: [
      { _id: "3-1", title: "SQL Basics", leetlink: "https://leetcode.com/studyplan/top-sql-50/", ytlink: "https://youtu.be/HXV3zeQKqGY", article: "https://www.geeksforgeeks.org/sql-tutorial/", level: "EASY", status: "Pending" },
      { _id: "3-2", title: "MongoDB", leetlink: "https://www.mongodb.com/", ytlink: "https://youtu.be/oSIv-E60NiU", article: "https://www.geeksforgeeks.org/mongodb-an-introduction/", level: "MEDIUM", status: "Pending" },
      { _id: "3-3", title: "PostgreSQL", leetlink: "https://www.postgresql.org/", ytlink: "https://youtu.be/qw--VYLpxG4", article: "https://www.geeksforgeeks.org/postgresql-tutorial/", level: "MEDIUM", status: "Pending" },
      { _id: "3-4", title: "Database Indexing", leetlink: "https://use-the-index-luke.com/", ytlink: "https://youtu.be/uh8FjVBr58A", article: "https://www.geeksforgeeks.org/indexing-in-databases/", level: "HARD", status: "Pending" },
      { _id: "3-5", title: "Database Transactions", leetlink: "https://www.postgresql.org/docs/current/tutorial-transactions.html", ytlink: "https://youtu.be/_-KyXUW5UbU", article: "https://www.geeksforgeeks.org/transactions-in-dbms/", level: "HARD", status: "Pending" },
    ],
  },

  // ================= Operating Systems =================
  {
    _id: "4",
    title: "Operating Systems",
    subtopics: [
      { _id: "4-1", title: "Processes & Threads", leetlink: "https://leetcode.com/tag/concurrency/", ytlink: "https://youtu.be/LnzuMJLZRdU", article: "https://www.geeksforgeeks.org/processes-and-threads/", level: "EASY", status: "Pending" },
      { _id: "4-2", title: "Deadlocks", leetlink: "https://www.studytonight.com/operating-system/deadlocks-in-operating-system", ytlink: "https://youtu.be/8iUevwj3MS8", article: "https://www.geeksforgeeks.org/deadlock-in-operating-system/", level: "MEDIUM", status: "Pending" },
      { _id: "4-3", title: "Memory Management", leetlink: "https://www.studytonight.com/operating-system/memory-management-in-operating-system", ytlink: "https://youtu.be/o7S58U8s2DQ", article: "https://www.geeksforgeeks.org/memory-management-in-os/", level: "MEDIUM", status: "Pending" },
      { _id: "4-4", title: "Scheduling Algorithms", leetlink: "https://www.studytonight.com/operating-system/cpu-scheduling-algorithms-in-operating-system", ytlink: "https://youtu.be/DBt99F8lhC0", article: "https://www.geeksforgeeks.org/cpu-scheduling-in-operating-systems/", level: "MEDIUM", status: "Pending" },
      { _id: "4-5", title: "File Systems", leetlink: "https://en.wikipedia.org/wiki/File_system", ytlink: "https://youtu.be/ccWrbGEFgI8", article: "https://www.geeksforgeeks.org/file-systems/", level: "HARD", status: "Pending" },
    ],
  },

  // ================= Computer Networks =================
  {
    _id: "5",
    title: "Computer Networks",
    subtopics: [
      { _id: "5-1", title: "OSI Model", leetlink: "https://en.wikipedia.org/wiki/OSI_model", ytlink: "https://youtu.be/HEEnLZV2wGI", article: "https://www.geeksforgeeks.org/layers-of-osi-model/", level: "EASY", status: "Pending" },
      { _id: "5-2", title: "TCP/IP Model", leetlink: "https://en.wikipedia.org/wiki/Internet_protocol_suite", ytlink: "https://youtu.be/ZC8l8cSExTs", article: "https://www.geeksforgeeks.org/tcp-ip-model/", level: "EASY", status: "Pending" },
      { _id: "5-3", title: "HTTP & HTTPS", leetlink: "https://developer.mozilla.org/en-US/docs/Web/HTTP", ytlink: "https://youtu.be/iYM2zFP3Zn0", article: "https://www.geeksforgeeks.org/http-vs-https/", level: "MEDIUM", status: "Pending" },
      { _id: "5-4", title: "DNS & DHCP", leetlink: "https://www.cloudflare.com/learning/dns/what-is-dns/", ytlink: "https://youtu.be/5WFiW6LKHtU", article: "https://www.geeksforgeeks.org/dns-in-computer-network/", level: "MEDIUM", status: "Pending" },
      { _id: "5-5", title: "Firewalls", leetlink: "https://www.cloudflare.com/learning/network-layer/what-is-a-firewall/", ytlink: "https://youtu.be/NF8L1F1J3nE", article: "https://www.geeksforgeeks.org/firewalls-in-computer-networks/", level: "HARD", status: "Pending" },
    ],
  },
];

export default dummyTopics;
