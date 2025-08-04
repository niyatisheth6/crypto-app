import React from "react";
import PortfolioSummary from "./PortfolioSummary";
import CurrentPriceChart from "./CurrentPriceChart";
import RecentTransactions from "./RecentTransactions";
import BannerCards from "./BannerCards";

function Dashboard() {
  return (
  <>
     <PortfolioSummary />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <CurrentPriceChart />
          <RecentTransactions />
        </div>
        <BannerCards />
  </>
  );
}

export default Dashboard;
