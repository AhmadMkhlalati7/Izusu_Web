import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface CleanPaginationProps<TData> {
  table: Table<TData>;
  defaultPageSize?: number;
}

export function CleanPagination<TData>({
  table,
  defaultPageSize = 10,
}: CleanPaginationProps<TData>) {
  const { t } = useTranslation();
  useEffect(() => {
    table.setPageSize(defaultPageSize);
  }, [defaultPageSize, table]);
  return (
    <div className="flex items-center justify-end px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[80px] items-center justify-center text-[10px] font-medium">
          {t("page")} {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-7 w-7 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("gofirst")}</span>
            <DoubleArrowLeftIcon className="h-2 w-3" />
          </Button>
          <Button
            variant="outline"
            className="h-7 w-7 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("previous")}</span>
            <ChevronLeftIcon className="h-2 w-3" />
          </Button>
          <Button
            variant="outline"
            className="h-7 w-7 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("next")}</span>
            <ChevronRightIcon className="h-2 w-3" />
          </Button>
          <Button
            variant="outline"
            className="hidden h-7 w-7 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("golast")}</span>
            <DoubleArrowRightIcon className="h-2 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
