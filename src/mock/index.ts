export const listData = [
  {
    id: 1,
    title: "问卷1",
    isPublished: false,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 2,
    title: "问卷2",
    isPublished: false,
    isStarted: true,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 3,
    title: "问卷3",
    isPublished: true,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 4,
    title: "问卷4",
    isPublished: false,
    isStarted: false,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
];

export const startList = [
  {
    id: 1,
    title: "问卷1",
    isPublished: false,
    isStarted: true,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 2,
    title: "问卷2",
    isPublished: false,
    isStarted: true,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
  {
    id: 3,
    title: "问卷3",
    isPublished: true,
    isStarted: true,
    answerCount: 0,
    createAt: "3月10日 13:23",
  },
];

export type GetArrayElementType<T extends readonly unknown[]> =
  T extends readonly (infer U)[] ? U : never;

const MyConstArray = [...listData];

export type MyConstArrayItem = GetArrayElementType<typeof MyConstArray>;
