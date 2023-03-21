import { FunctionComponent } from "react";

interface Props {
  children: any;
  placeholder?: string;
  classesModified?: string;
}
const TableCell: FunctionComponent<Props> = ({
  children,
  placeholder,
  classesModified,
}): JSX.Element => {
  return (
    <td
      className={`whitespace-nowrap text-center font-medium ${placeholder} ${classesModified}`}
    >
      {children}
    </td>
  );
};

export default TableCell;
