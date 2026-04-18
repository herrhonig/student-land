import type { Student } from "@/entitites/student.schema";
import { $api } from "@/shared/api";
import { Button } from "@mantine/core";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState<Student[]>([]);
  useEffect(() => {
    $api.get("/students").then((res) => setData(res.data));
  }, []);

  console.log({ data });
  return <Button>APP</Button>;
}
