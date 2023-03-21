import { FunctionComponent } from "react";

interface Props {
  children: any;
  modifiedClasses?: string;
}

const TableHeadCell: FunctionComponent<Props> = ({
  children,
  modifiedClasses,
}): JSX.Element => {
  return (
    <th
      scope="col"
      className={`px-3 py-4 border border-slate-900 ${modifiedClasses}`}
    >
      {children}
    </th>
  );
};

export default TableHeadCell;
