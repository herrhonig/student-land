import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { queryKeys } from "@/shared/const/query-keys";

import type { CreateStudentDto, Student } from "../types/student";
import { studentService } from "./student.service";

export const useGetStudents = () => {
  return useQuery({
    queryKey: queryKeys.student.all,
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
      if (variables?.onSuccess) variables.onSuccess(newStundent);

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
