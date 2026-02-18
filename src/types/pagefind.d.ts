declare module "@pagefind/default-ui" {
  interface PagefindUIOptions {
    element: string;
    showSubResults?: boolean;
    showImages?: boolean;
    baseUrl?: string;
    bundlePath?: string;
    pageSize?: number;
    resetStyles?: boolean;
    showEmptyFilters?: boolean;
    debounceTimeoutMs?: number;
  }

  export class PagefindUI {
    constructor(options: PagefindUIOptions);
  }
}
