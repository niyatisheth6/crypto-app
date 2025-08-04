import {
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { Input } from "@/components/ui/input";
  import { Button } from "@/components/ui/button";
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
  import { Download } from "lucide-react";
  
  export default function CommonTable({ columns, data }) {
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
    });
  
    return (
      <div className="rounded-xl border bg-white shadow-sm p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            <Button variant="ghost">All</Button>
            <Button variant="ghost">Deposit</Button>
            <Button variant="ghost">Withdraw</Button>
            <Button variant="ghost">Trade</Button>
          </div>
          <div className="flex gap-2">
            <Input placeholder="Search by ID or destination" className="w-64" />
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
          </div>
        </div>
        <Table >
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map(row => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  