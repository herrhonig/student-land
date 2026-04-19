import { Button, Stack, Text, Title } from "@mantine/core";

interface ErrorPageProps {
  onReset?: () => void;
  onReload?: () => void;
}

export const ErrorPage = ({ onReset, onReload }: ErrorPageProps) => {
  return (
    <Stack h="100vh" align="center" justify="center">
      <Title order={2}>Что-то пошло не так</Title>

      <Text c="dimmed">Попробуйте обновить страницу</Text>

      {onReset && <Button onClick={onReset}>Попробовать снова</Button>}

      {onReload && (
        <Button variant="light" onClick={onReload}>
          Перезагрузить страницу
        </Button>
      )}
    </Stack>
  );
};
