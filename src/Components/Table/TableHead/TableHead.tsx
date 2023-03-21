import { FunctionComponent } from "react";

const TableHead: FunctionComponent = (): JSX.Element => (
  <thead className="border-b font-medium dark:border-neutral-500 bg-neutral-700 text-neutral-50">
    <tr>
      <th scope="col" className="text-center border border-slate-900">
        #
      </th>
      <th scope="col" className="px-3 py-4 border border-slate-900">
        Name
      </th>
      <th scope="col" className="px-3 py-4 border border-slate-900">
        Price
      </th>
      <th scope="col" className="px-3 py-4 border border-slate-900">
        1h % change
      </th>
      <th scope="col" className="px-3 py-4 border border-slate-900">
        24h % change
      </th>
      <th scope="col" className="px-3 py-4 border border-slate-900">
        Market Cap
      </th>
    </tr>
  </thead>
);

export default TableHead;
