interface IGenerateQueryStringParams {
  currentSchemeStatus: string | null;
  currentPage: number | null;
  currentLimit: number | null;
  currentSubstring: string | null;
  currentSortingParam: string | null;
  currentSortingDirection: string | null;
}

export const generateQueryString = ({
  currentSchemeStatus: schemeStatus,
  currentPage: page,
  currentLimit: limit,
  currentSubstring: substring,
  currentSortingParam: sortingParam,
  currentSortingDirection: sortingDirection,
}: IGenerateQueryStringParams) => {
  const data = Object.assign(
    {},
    schemeStatus === null || schemeStatus === "" ? null : { schemeStatus },
    page === null ? null : { page },
    limit === null  ? null : { limit },
    substring === null || substring === "" ? null : { substring },
    sortingParam === null || sortingParam === "" ? null : { sortingParam },
    sortingDirection === null || sortingDirection === ""
      ? null
      : { sortingDirection }
  );

  const params = new URLSearchParams(data);

  return params.toString();
};
