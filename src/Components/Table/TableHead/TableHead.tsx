import { FunctionComponent } from "react";
import TableHeadCell from "./TableHeadCell/TableHeadCell";

const TableHead: FunctionComponent = (): JSX.Element => (
  <thead className="border-b font-medium dark:border-neutral-500 bg-neutral-700 text-neutral-50">
    <tr>
      <TableHeadCell modifiedClasses="text-center">#</TableHeadCell>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Price</TableHeadCell>
      <TableHeadCell>1h % change</TableHeadCell>
      <TableHeadCell>24h % change</TableHeadCell>
      <TableHeadCell>Market Cap</TableHeadCell>
    </tr>
  </thead>
);

export default TableHead;
