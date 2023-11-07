export type PageProps<
  Params extends string[],
  SearchParams extends string[],
> = {
  params: {
    [K in Params[number] as K extends `...${infer Rest}`
      ? Rest
      : K]: K extends `...${string}` ? string[] : string;
  };
  searchParams: {
    [K in SearchParams[number]]: string | string[] | undefined;
  };
};
