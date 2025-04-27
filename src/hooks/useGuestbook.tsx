import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getGuestbookList,
  addGuestbookItem,
  deleteGuestbookItem,
} from "../api/guestbook";
import { GuestbookItem } from "../types";

const guestbookQueryKey = ["guestbook"] as const;

export const useGuestBook = () => {
  const queryClient = useQueryClient();

  const query = useQuery<
    GuestbookItem[],
    Error,
    GuestbookItem[],
    typeof guestbookQueryKey
  >({
    queryKey: guestbookQueryKey,
    queryFn: getGuestbookList,
  });

  const postMutation = useMutation<
    unknown,
    Error,
    { name: string; message: string; password: string }
  >({
    mutationFn: addGuestbookItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: guestbookQueryKey });
    },
  });

  const deleteMutation = useMutation<
    unknown,
    Error,
    { id: number; password: string }
  >({
    mutationFn: deleteGuestbookItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: guestbookQueryKey });
    },
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    postMutation,
    deleteMutation,
  };
};
