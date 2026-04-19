import { Button, Stack, Text, Title, Loader } from "@mantine/core";
import { AlertCircle, Inbox } from "lucide-react";

import type { StatePageProps, VariantMapType } from "./StatePage.types";

const getIcon = (variant: StatePageProps["variant"]) => {
  switch (variant) {
    case "error":
      return <AlertCircle size={48} />;

    case "loading":
      return <Loader size="lg" />;

    default:
      return <Inbox size={48} />;
  }
};

const variantMap: VariantMapType = {
  error: {
    title: "Что-то пошло не так",
    description: "Попробуйте обновить страницу",
  },
  empty: {
    title: "Ничего не найдено",
    description: "Данные отсутствуют",
  },
  loading: {
    title: "Загрузка...",
    description: "Пожалуйста подождите",
  },
};

export const StatePage = ({
  variant = "empty",
  size = "page",
  title,
  description,
  actionText,
  onAction,
}: StatePageProps) => {
  const isPage = size === "page";
  const defaults = variantMap[variant];

  return (
    <Stack align="center" justify="center" h={isPage ? "100vh" : 300}>
      {getIcon(variant)}
      <Title order={isPage ? 2 : 4}>{title || defaults.title}</Title>
      <Text c="dimmed" ta="center">
        {description || defaults.description}
      </Text>
      {actionText && <Button onClick={onAction}>{actionText}</Button>}
    </Stack>
  );
};
