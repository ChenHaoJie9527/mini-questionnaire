import React from "react";

function App() {
  // 列表页
  const questionList = [
    {
      id: 1,
      title: "问卷1",
      isPublished: false,
    },
    {
      id: 2,
      title: "问卷2",
      isPublished: false,
    },
    {
      id: 3,
      title: "问卷3",
      isPublished: true,
    },
    {
      id: 4,
      title: "问卷4",
      isPublished: false,
    },
  ];

  const onEdit = (id: number) => {
    console.log("edit id: ", id);
  };
  return (
    <div className="App container mx-auto">
      <h1 className="text-center mb-2">问卷列表页</h1>
      <div className="flex items-center flex-col space-y-4">
        {questionList.map((item) => {
          const { id, title, isPublished } = item;
          return (
            <div
              className="flex items-center space-x-2 border-b-2"
              key={id}
            >
              <span>{title}</span>
              {isPublished ? (
                <span className="text-green-500">已发布</span>
              ) : (
                <span className="text-red-500">未发布</span>
              )}
              <button onClick={() => onEdit(id)}>编辑问卷</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
