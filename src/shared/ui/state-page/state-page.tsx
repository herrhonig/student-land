import { AlertCircle, Inbox } from "lucide-react";

import { cn } from "@/shared/lib/cn";

import type { StatePageProps, VariantMapType } from "./state-page.types";

const getIcon = (variant: StatePageProps["variant"]) => {
  switch (variant) {
    case "error":
      return <AlertCircle size={16} />;

    case "loading":
      return "";

    default:
      return <Inbox size={16} />;
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
    title: "Загрузка",
    description: "Пожалуйста, подождите",
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
    <div
      className={cn(
        "flex flex-col items-center justify-center text-center gap-3 px-4",
        isPage ? "min-h-screen" : "h-[300px]",
      )}
    >
      <h2
        className={cn(
          "flex items-center gap-2 font-semibold text-gray-900",
          isPage ? "text-2xl" : "text-lg",
        )}
      >
        <span className="text-2xl">{getIcon(variant)}</span>
        {title || defaults.title}
      </h2>

      <p className="text-sm text-muted-foreground max-w-md">
        {description || defaults.description}
      </p>

      {actionText && (
        <button
          onClick={onAction}
          className={cn(
            "mt-2 px-4 py-2 rounded-md text-sm transition cursor-pointer",
            "bg-black text-white hover:bg-gray-800",
          )}
        >
          {actionText}
        </button>
      )}
    </div>
  );
};
