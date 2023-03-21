import { FunctionComponent } from "react";
import { useGetCryptosList } from "../../../hooks/useGetCryptosList";
import { singleCrypto } from "../../../Interfaces/interfaces";
import TableRow from "./TableRow/TableRow";

interface Props {}
const TableBody: FunctionComponent<Props> = (): JSX.Element => {
  const { loading, data, error } = useGetCryptosList(50, 1);

  return (
    <tbody>
      {data.map(
        (crypto: singleCrypto, index: number): JSX.Element => (
          <TableRow
            key={`${index}_${crypto?.name}`}
            index={index + 1}
            {...crypto}
            loading={loading}
          />
        )
      )}
    </tbody>
  );
};

export default TableBody;
