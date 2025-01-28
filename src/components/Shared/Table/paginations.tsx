import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
  filter?: boolean;
  defaultPageSize?: number;
}

export function DataTablePagination<TData>({
  table,
  filter = true,
  defaultPageSize = 10,
}: DataTablePaginationProps<TData>) {
  const { t } = useTranslation();
  useEffect(() => {
    table.setPageSize(defaultPageSize);
  }, [defaultPageSize, table]);
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex-1 text-xs text-muted-foreground hidden sm:block">
        {table.getFilteredSelectedRowModel().rows.length + " " + t("of") + " "}
        {table.getFilteredRowModel().rows.length} {t("rowsselected")}
      </div>
      <div className="flex items-center space-x-3 lg:space-x-8">
        {filter && (
          <div className="flex items-center space-x-2">
            <p className="text-[10px] sm:text-xs font-medium text-nowrap">
              {t("rowsperpage")}
            </p>
            <Select
              value={`${table.getState().pagination.pageSize}`}
              onValueChange={(value) => {
                table.setPageSize(Number(value));
              }}
            >
              <SelectTrigger className="h-7 w-[60px]">
                <SelectValue
                  placeholder={table.getState().pagination.pageSize}
                />
              </SelectTrigger>
              <SelectContent side="top">
                {[10, 20, 30, 40, 50, 100].map((pageSize) => (
                  <SelectItem key={pageSize} value={`${pageSize}`}>
                    {pageSize}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        <div className="flex w-[80px] items-center justify-center text-[10px] sm:text-xs font-medium">
          {t("page")} {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            type="button"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("gofirst")}</span>
            <DoubleArrowLeftIcon className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            type="button"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("previous")}</span>
            <ChevronLeftIcon className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            type="button"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("next")}</span>
            <ChevronRightIcon className="h-3 w-3" />
          </Button>
          <Button
            variant="outline"
            type="button"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("golast")}</span>
            <DoubleArrowRightIcon className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
}
