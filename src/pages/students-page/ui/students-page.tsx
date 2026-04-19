import type { Student } from "@/entitites/student/types/student.schema";

type StudentsPageProps = {};

export const StudentsPage = ({}: StudentsPageProps) => {
  return (
    <div>
      <h1 className="text-amber-400">StudentsPage</h1>
      <br />
      <br />
      {/* <Stack gap={"lg"}>
        {students.map(({ id, name, totalTasks, solvedCount }) => (
          <Group styles={{}}>
            {id} {name}
            <Text>
              {solvedCount}/{totalTasks}
            </Text>
          </Group>
        ))}
      </Stack> */}
    </div>
  );
};
