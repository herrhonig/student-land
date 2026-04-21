import { ChevronLeft } from "lucide-react";

import { cn } from "@/shared/lib";

type GoBackButtonProps = {
  onClick: () => void;
  label?: string;
  className?: string;
};

export const GoBackButton = ({
  className,
  label,
  onClick,
}: GoBackButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-muted-foreground hover:text-foreground text-md inline-flex items-center gap-1 transition",
        "cursor-pointer",
        className,
      )}
    >
      <ChevronLeft className="h-4 w-4" />
      {label}
    </button>
  );
};
