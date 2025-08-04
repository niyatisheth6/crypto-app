import CommonTable from '@/components/common-table/CommonTable';
import React from 'react'
import { useTransitionTable } from '@/hooks/useTransitionTable';

function Transitions() {


const dummyData = [
  {
    id: "HD82NA2H",
    date: "2022-06-09",
    time: "07:06 PM",
    type: "INR Deposit",
    subType: "E-Transfer",
    amount: "+ ₹81,123.10",
    subAmount: "",
    status: "Pending",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-07",
    time: "02:48 PM",
    type: "INR Withdraw",
    subType: "Wire Transfer",
    amount: "- ₹81,123.10",
    subAmount: "",
    status: "Processing",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-04",
    time: "09:21 AM",
    type: "Buy",
    subType: "",
    amount: "+ 12.48513391 BTC",
    subAmount: "- ₹81,123.10",
    status: "Cancelled",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-03",
    time: "01:32 PM",
    type: "Sell",
    subType: "",
    amount: "- 0.36401628 BTC",
    subAmount: "+ ₹19,378.84",
    status: "Completed",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-03",
    time: "09:02 AM",
    type: "BTC Deposit",
    subType: "",
    amount: "+ 4.13946104 BTC",
    subAmount: "+ ₹37,929.31",
    status: "Completed",
  },
  {
    id: "HD82NA2H",
    date: "2022-06-01",
    time: "01:56 PM",
    type: "BTC Withdraw",
    subType: "",
    amount: "- 10.00000000 BTC",
    subAmount: "- ₹62,017.58",
    status: "Completed",
  },
];

const {columns} = useTransitionTable()


  return <CommonTable columns={columns} data={dummyData} />;
}

export default Transitions