import { UseInfiniteQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { AsyncFn } from "../static/async-fn";
import { AsyncFnReturn } from "../utils/async-fn-return";
import { Parameter } from "../utils/parameter";
import { WrapVariables } from "./wrap-variables";

export type UseInfiniteQueryParams<
  T extends AsyncFn,
  Error = AxiosError<any>,
  Data = AsyncFnReturn<T>,
  Variables = Parameter<T>
> = {
  options?: Omit<
    UseInfiniteQueryOptions<Data, Error, Data, Data, any>,
    "queryKey" | "queryFn"
  >;
} & WrapVariables<Variables>;
