import { FunctionComponent } from "react";

import TableBody from "./TableBody/TableBody";
import TableHead from "./TableHead/TableHead";

interface Props {}

const Table: FunctionComponent<Props> = (): JSX.Element => {
  // if (error)
  //   return <section>There is a problem. Please try again later</section>;

  //if (loading) return <section>Loading, please wait</section>;
  return (
    <table className="min-w-full text-left text-sm font-light">
      <TableHead />
      <TableBody />
    </table>
  );
};

export default Table;
