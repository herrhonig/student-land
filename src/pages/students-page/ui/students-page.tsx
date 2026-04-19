import type { Student } from "@/entitites/student/types/student.schema";
import { Box, Group, Stack, Text } from "@mantine/core";
import { useLoaderData } from "react-router";

type StudentsPageProps = {};

export const StudentsPage = ({}: StudentsPageProps) => {
  return (
    <div>
      <h1>StudentsPage</h1>
      <br />
      <br />
      <Stack gap={"lg"}>
        {students.map(({ id, name, totalTasks, solvedCount }) => (
          <Group styles={{}}>
            {id} {name}
            <Text>
              {solvedCount}/{totalTasks}
            </Text>
          </Group>
        ))}
      </Stack>
    </div>
  );
};
