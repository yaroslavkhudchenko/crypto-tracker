import { FunctionComponent } from "react";
import { useGetCryptosList } from "../../hooks/useGetCryptosList";
import { singleCrypto } from "../../Interfaces/interfaces";
import SingleCrypto from "../SingleCrypto/SingleCrypto";

interface Props {}

const Table: FunctionComponent<Props> = (): JSX.Element => {
  const { loading, data, error } = useGetCryptosList(50, 1);
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500">
        <tr>
          <th scope="col" className="px-6 py-4">
            Name
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (crypto: singleCrypto, index: number): JSX.Element => (
            <SingleCrypto
              key={`${index}_${crypto?.name}`}
              index={index}
              {...crypto}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
