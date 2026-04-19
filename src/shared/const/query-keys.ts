export const queryKeys = {
  student: {
    all: ["students"] as const,
    list: () => [...queryKeys.student.all, "list"] as const,
    byId: (id: string) => [...queryKeys.student.all, id] as const,
  },
};
