import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { IMachineTable } from "@/data/static/machines/machines.types";
import { cn } from "cn";

interface IMachineSpecTableProps {
  tables?: IMachineTable[];
}

/**
 * Renders spec tables with a fixed first column; remaining columns scroll horizontally.
 * Adjacent cells with identical values are merged using colSpan.
 */
export function MachineSpecTable({ tables }: IMachineSpecTableProps) {
  if (!tables?.length) return null;

  return (
    <div className={"flex flex-col gap-8 p-2 text-start"}>
      {tables.map((table, index) => (
        <div key={table.title ?? index} className={"flex flex-col gap-3"}>
          {table.title && (
            <h3 className={"text-lg font-semibold text-primary"}>
              {table.title}
            </h3>
          )}
          <div className={"border"}>
            <Table className={"border-separate border-spacing-0"}>
              <TableHeader>
                <TableRow className={"hover:bg-transparent"}>
                  <TableHead
                    className={
                      "sticky left-0 z-10 w-36 min-w-36 bg-primary text-primary-foreground border-r border-primary-foreground/20 md:w-56 md:min-w-56"
                    }
                  >
                    {table.rowHeader ?? "Machine Models"}
                  </TableHead>
                  {table.columns.map((column, i) => (
                    <TableHead
                      key={column}
                      className={cn(
                        "min-w-44 bg-primary text-primary-foreground text-center",
                        // Add border between header columns to match the body borders
                        i < table.columns.length - 1 &&
                          "border-r border-primary-foreground/20",
                      )}
                    >
                      {column}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {table.rows.map((row) => {
                  // Group identical adjacent values into merged cells
                  const mergedCells = [];
                  let i = 0;
                  while (i < table.columns.length) {
                    const val = row.values[i] ?? "—";
                    let span = 1;
                    // Check if the next values are the same
                    while (
                      i + span < table.columns.length &&
                      (row.values[i + span] ?? "—") === val
                    ) {
                      span++;
                    }
                    mergedCells.push({ value: val, span, index: i });
                    i += span; // skip ahead by the number of merged columns
                  }

                  return (
                    <TableRow key={row.label}>
                      <TableCell
                        className={
                          "sticky left-0 z-10 w-36 min-w-36 whitespace-pre-line border-b border-r border-foreground/20 bg-background font-medium text-primary md:w-56 md:min-w-56"
                        }
                      >
                        {row.label}
                      </TableCell>
                      {/* Table content with colSpan */}
                      {mergedCells.map((cell, idx) => (
                        <TableCell
                          key={`${row.label}-${cell.index}`}
                          colSpan={cell.span}
                          className={cn(
                            "min-w-44 whitespace-pre-line border-b border-foreground/20 bg-background text-center",
                            // Add an X border ONLY if it is not the last cell in the row
                            idx < mergedCells.length - 1 && "border-r",
                            // Center the text if it spans multiple columns to make it look cleaner
                            cell.span > 1 && "text-center",
                          )}
                        >
                          {cell.value}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}
