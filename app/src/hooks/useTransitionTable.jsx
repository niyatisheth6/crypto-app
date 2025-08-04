import { Badge } from "@/components/ui/badge";

export const useTransitionTable = () => {
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "dateTime",
      header: "Date & Time",
      cell: ({ row }) => {
        const { date, time } = row.original;
        return (
          <div className="flex flex-col">
            <span>{date}</span>
            <span className="text-xs text-muted-foreground">{time}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "type",
      header: "Type",
      cell: ({ row }) => {
        const { type, subType } = row.original;
        return (
          <div className="flex flex-col">
            <span className="font-medium">{type}</span>
            <span className="text-xs text-muted-foreground">{subType}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "amount",
      header: "Amount",
      cell: ({ row }) => {
        const { amount, subAmount } = row.original;
        return (
          <div className="flex flex-col">
            <span
              className={
                amount.includes("-") ? "text-red-500" : "text-green-500"
              }
            >
              {amount}
            </span>
            <span className="text-xs text-muted-foreground">{subAmount}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        const status = row.getValue("status");
        const colorMap = {
          Pending: "secondary",
          Processing: "warning",
          Cancelled: "destructive",
          Completed: "success",
        };

        return <Badge variant={colorMap[status] || "outline"}>{status}</Badge>;
      },
    },
  ];

  return { columns };
};
