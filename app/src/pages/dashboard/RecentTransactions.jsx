import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

function RecentTransactions() {
  const transactions = [
    { type: "INR Deposit", date: "2022-06-09 7:06 PM", amount: "+ ₹81,123.10" },
    {
      type: "BTC Sell",
      date: "2022-05-27 12:32 PM",
      amount: "- 12.48513391 BTC",
    },
    { type: "INR Deposit", date: "2022-06-09 7:06 PM", amount: "+ ₹81,123.10" },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm">Recent Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {transactions.map((tx, index) => (
            <div key={index} className="flex justify-between items-center p-3">
              <div>
                <p className="font-semibold text-sm">{tx.type}</p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
              <p className="text-sm font-medium">{tx.amount}</p>
            </div>
          ))}
        </div>
        <Button className="w-full " variant="secondary">
          View All
        </Button>
      </CardContent>
    </Card>
  );
}

export default RecentTransactions;
