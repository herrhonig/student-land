import axios from "axios";

export const handleApiError = (error: unknown): never => {
  if (axios.isAxiosError(error)) {
    const message =
      error.response?.data?.message || error.message || "Ошибка запроса";

    throw new Error(message);
  }

  throw new Error("Неизвестная ошибка");
};
