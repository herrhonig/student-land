export const paths = {
  home: "/",
  students: {
    root: "/students",
    details: "/students/:id",
    create: "/students/create",
    detailsById: (id: string | number) => `/students/${id}`,
  },
} as const;
