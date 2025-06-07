import { api } from "./api";
import { GuestbookItem } from "../types";

export const getGuestbookList = async (): Promise<GuestbookItem[]> => {
  const response = await api.get("/guestbook");
  return response.data.map(
    (item: {
      id: number;
      name: string;
      message: string;
      createdAt: string;
    }) => ({
      id: item.id,
      name: item.name,
      message: item.message,
      date: item.createdAt.split("T")[0],
    })
  );
};
export const addGuestbookItem = async (data: {
  name: string;
  message: string;
  password: string;
}) => {
  const response = await api.post("/guestbook", data);
  return response.data;
};
export const deleteGuestbookItem = async (data: {
  id: number;
  password: string;
}) => {
  const response = await api.post("/guestbook/delete", data);
  return response.data;
};
