import type { Student } from "@/entitites/student/student.schema";
import { $api } from "@/shared/api";
import { StatePage } from "@/shared/ui/state-page";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<Student[]>([]);
  const [err, setErr] = useState(false);
  useEffect(() => {
    $api
      .get("/students")
      .then((res) => setData(res.data))
      .catch(() => setErr(true));
  }, []);

  if (err) {
    return <StatePage variant="error" size="page" actionText="Обновить" />;
  }

  console.log({ data });
  return <Button>APP</Button>;
}
