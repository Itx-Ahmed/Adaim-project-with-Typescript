import { useQuery } from "@tanstack/react-query";
import { asyncGetAllUsers, asyncGetUserById } from "./fetcher";

export enum QueryKeys {
  USERS = "users",
}

export const useGetAllUsers = () =>
  useQuery({
    queryKey: [QueryKeys.USERS],
    queryFn: asyncGetAllUsers,
  });

export const useGetSingleUser = (userId: string) =>
  useQuery({
    queryKey: [QueryKeys.USERS, userId],
    queryFn: () => asyncGetUserById(userId),
  });
