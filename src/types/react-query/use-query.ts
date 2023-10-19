import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { WrapVariables } from "./wrap-variables";
import { AsyncFn } from "../static/async-fn";
import { AsyncFnReturn } from "../utils/async-fn-return";
import { Parameter } from "../utils/parameter";

// Example : const useAnyQuery = ({ options, variables } : UseQueryParams<typeof anyApiFn>) => {...}
export type UseQueryParams<
  T extends AsyncFn,
  Error = AxiosError<any>,
  Data = AsyncFnReturn<T>,
  Variables = Parameter<T>
> = {
  options?: Omit<UseQueryOptions<Data, Error>, "queryKey" | "queryFn">;
} & WrapVariables<Variables>;
