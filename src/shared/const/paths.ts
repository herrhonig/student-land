export const paths = {
  home: "/",
  students: {
    root: "/students",
    details: "/students/:id",
    detailsById: (id: string | number) => `/students/${id}`,
  },
} as const;
