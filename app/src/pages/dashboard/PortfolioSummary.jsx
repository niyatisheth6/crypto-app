import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus } from "lucide-react";

function PortfolioSummary() {
  return (
    <Card className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-6 justify-between w-full">
      <CardContent>
        <h2 className="text-lg text-muted-foreground">Total Portfolio Value</h2>
        <p className="text-2xl font-bold mt-1">₹ 112,312.24</p>
      </CardContent>

      <CardContent>
        <h2 className="text-lg text-muted-foreground">Wallet Balances</h2>
        <p className="text-lg font-semibold mt-1">22.39401000 BTC</p>
      </CardContent>
      <CardContent>
        <p className="text-lg font-semibold mt-7">₹ 1,300.00 INR</p>
      </CardContent>

      <div className="flex justify-end items-center gap-2">
        <Button>
          <Plus className="mr-1 h-4 w-4" /> Deposit
        </Button>
        <Button>
          <Minus className="mr-1 h-4 w-4" /> Withdraw
        </Button>
      </div>
    </Card>
  );
}
export default PortfolioSummary;
