import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "./table.module.css";
import { Details } from "./details/details";
import { Chip } from "../../atoms/chip/chip";
import { ProductProps, TableProps } from "./table.types";
import { MobileCard } from "./mobile-card/mobile-card";


const defaultColumns: ColumnDef<ProductProps>[] = [
  {
    header: "Customer",
    accessorKey: "customer",
    cell: ({ row }) => (
      <div>
        <span className="body-2-bold">{row.original.customer}</span>
        <br />
        <span className="caption-regular">{row.original.email}</span>
      </div>
    ),
  },
  { header: "Date", accessorKey: "date" },
  { header: "Product", accessorKey: "product" },
  { header: "Status", accessorKey: "status" },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => <span className="body-2-bold">{row.original.amount}</span>,
  },
];

export const Table = ({ data }: TableProps) => {
  const [selectedRow, setSelectedRow] = React.useState<ProductProps | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleRowClick = (row: ProductProps) => {
    setSelectedRow(row);
    setIsDrawerOpen(true);
  };

  const [columns] = React.useState(() => [...defaultColumns]);
  const [sorting, setSorting] = React.useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
  });

  return (
    <div className={styles.tableContainer}>
      <h5>Transactions</h5>
      <p>Recent transactions from your store.</p>

      <div className={styles.tableScrollContainer}>
        <table className={styles.table}>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const isSorted = header.column.getIsSorted();
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className={styles.sortableHeader}
                    >
                      <span className={styles.headerContent}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                        {isSorted === "asc" ? (
                          <ChevronUpIcon className={styles.chevronIcon} />
                        ) : isSorted === "desc" ? (
                          <ChevronDownIcon className={styles.chevronIcon} />
                        ) : (
                          <ChevronUpIcon className={`${styles.chevronIcon} ${styles.inactive}`} />
                        )}
                      </span>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row.original)}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {cell.column.id === "status" ? (
                      <Chip status={cell.getValue() as ProductProps["status"]} />
                    ) : (
                      flexRender(cell.column.columnDef.cell, cell.getContext())
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedRow && (
        <Details
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          data={selectedRow}
        />
      )}

      <div className={styles.mobileCards}>
        {data.map((item) => (
          <MobileCard key={item.id} item={item} onClick={() => handleRowClick(item)} />
        ))}
      </div>
    </div>
  );
};
