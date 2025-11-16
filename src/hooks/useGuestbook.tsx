// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   getGuestbookList,
//   addGuestbookItem,
//   deleteGuestbookItem,
// } from "../api/guestbook";
// import { GuestbookItem } from "../types";

// const guestbookQueryKey = ["guestbook"] as const;

// export const useGuestBook = () => {
//   const queryClient = useQueryClient();

//   const query = useQuery<
//     GuestbookItem[],
//     Error,
//     GuestbookItem[],
//     typeof guestbookQueryKey
//   >({
//     queryKey: guestbookQueryKey,
//     queryFn: getGuestbookList,
//   });

//   const postMutation = useMutation<
//     unknown,
//     Error,
//     { name: string; message: string; password: string }
//   >({
//     mutationFn: addGuestbookItem,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: guestbookQueryKey });
//     },
//   });

//   const deleteMutation = useMutation<
//     unknown,
//     Error,
//     { id: number; password: string }
//   >({
//     mutationFn: deleteGuestbookItem,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: guestbookQueryKey });
//     },
//   });

//   return {
//     data: query.data,
//     isLoading: query.isLoading,
//     postMutation,
//     deleteMutation,
//   };
// };

// hooks/useGuestbook.ts
import { useQuery } from "@tanstack/react-query";

export type GuestBookItem = {
  id: number;
  name: string;
  message: string;
  date: string;
};

export function useGuestBook() {
  return useQuery<GuestBookItem[]>({
    queryKey: ["guestbook"],
    queryFn: async () => {
      const res = await fetch("/data/list.json"); // public 기준 경로
      if (!res.ok) {
        throw new Error("방명록 데이터를 불러오지 못했습니다.");
      }
      return res.json();
    },
  });
}
