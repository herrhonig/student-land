import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { CreateStudentDto, Student } from "../types/student.schema";
import { studentService } from "./student.service";
import { queryKeys } from "@/shared/const/query-keys";

export const useGetStudents = () => {
  return useQuery({
    queryKey: queryKeys.student.list(),
    queryFn: studentService.getStudents,
  });
};

export const useGetStudentById = ({
  enabled = true,
  id,
}: {
  enabled?: boolean;
  id: string;
}) => {
  return useQuery({
    queryKey: queryKeys.student.byId(id),
    queryFn: () => studentService.getStudent(id),
    enabled: Boolean(id) && enabled,
  });
};

export const useCreateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: {
      newStudent: CreateStudentDto;
      onSuccess?: (newStundent: Student) => void;
    }) => studentService.createStudent(params.newStudent),
    onSuccess: (newStundent, variables) => {
      variables?.onSuccess && variables.onSuccess(newStundent);

      void queryClient.invalidateQueries({
        queryKey: queryKeys.student.all,
      });
    },
  });
};

export const useUpdateStudent = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: { data: Student; onCb?: () => void }) =>
      studentService.updateStudent(params.data),

    onSuccess: (data, variables) => {
      variables.onCb?.();

      if (variables.data.id) {
        queryClient.setQueryData(
          queryKeys.student.byId(variables.data.id),
          data,
        );
      }

      queryClient.invalidateQueries({
        queryKey: queryKeys.student.list(),
      });
    },
  });
};

// export const useDeleteStudent = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: (params: { id: string; onCb?: () => void }) =>
//       studentService.deleteStudent(params.id),
//     onSuccess: (_, variables) => {
//       variables.onCb && variables.onCb();
//       void queryClient.invalidateQueries({
//         queryKey: queryKeys.student.getList(),
//       });
//     },
//     onError: (_error: ResponseError) => {},
//   });
// };
