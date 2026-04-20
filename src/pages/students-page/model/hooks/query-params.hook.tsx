import { useSearchParams } from "react-router";

export const useStudentsQueryParams = () => {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") || "";
  const status = params.get("status") || "all";
  const sort = params.get("sort") || "desc";

  const updateParams = (next: Record<string, string>) => {
    const newParams = new URLSearchParams(params);
    console.log({ next });

    Object.entries(next).forEach(([key, value]) => {
      if (value === "all" || value === "") {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }
    });

    setParams(newParams);
  };

  return {
    search,
    status,
    sort,
    updateParams,
  };
};
