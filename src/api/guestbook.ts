import { api } from "./api";
import { GuestbookItem } from "../types";

export const getGuestbookList = async (): Promise<GuestbookItem[]> => {
  const response = await api.get("/guestbook");
  console.log("getresponse : ", response);
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
  const response = await api.post("/guestbook", data); // 여기도 baseURL/api에서 "/guestbook"으로 정확히 지정!
  return response.data;
};
export const deleteGuestbookItem = async (data: {
  id: number;
  password: string;
}) => {
  const response = await api.post("/guestbook/delete", data);
  return response.data;
};
