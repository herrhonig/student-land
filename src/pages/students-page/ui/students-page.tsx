import { useNavigate } from "react-router";
import { StudentCard, useGetStudents } from "@/entitites/student";
import { paths } from "@/shared/const/paths";
import { Button, Input, Select, StatePage } from "@/shared/ui";
import { dayjs } from "@/shared/lib";
import { useStudentsQueryParams } from "../model/hooks/query-params.hook";
import { useMemo } from "react";

export const StudentsPage = () => {
  const navigate = useNavigate();
  const { data: students, isLoading, refetch } = useGetStudents();
  const { search, sort, status, updateParams } = useStudentsQueryParams();

  const filteredStudents = useMemo(() => {
    if (!students) return [];

    return students
      .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
      .filter((s) => (status === "all" ? true : s.status === status))
      .sort((a, b) => {
        const aTime = dayjs(a.registeredAt).valueOf();
        const bTime = dayjs(b.registeredAt).valueOf();

        return sort === "asc" ? aTime - bTime : bTime - aTime;
      });
  }, [students, search, status, sort]);

  if (isLoading) {
    return <StatePage variant="loading" />;
  }

  if (!students || students.length === 0) {
    return (
      <StatePage
        variant="empty"
        actionText="Try again"
        onAction={() => refetch()}
      />
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center px-6 pt-6">
        <h1 className="text-xl font-semibold">Students</h1>
        <Button onClick={() => navigate(paths.students.create)}>
          Add student
        </Button>
      </div>

      <div className="grid  gap-3 px-6">
        <Input
          value={search}
          onChange={(e) => updateParams({ search: e.target.value })}
          placeholder="Search by name..."
          className="w-8 border px-3 py-2 rounded-md max-md:w-full"
        />
        <div className="max-w-sm">
          <Select
            value={status}
            options={[
              { label: "All", value: "all" },
              { label: "Active", value: "active" },
              { label: "Excluded", value: "excluded" },
            ]}
            onChange={(e) => updateParams({ status: e.target.value })}
            className="border px-3 py-2 rounded-md"
          />

          <Select
            value={sort}
            options={[
              { label: "Newest", value: "desc" },
              { label: "Oldest", value: "asc" },
            ]}
            onChange={(e) => updateParams({ sort: e.target.value })}
            className="border px-3 py-2 rounded-md"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
        {filteredStudents.map((student) => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};
