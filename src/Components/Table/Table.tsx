import { FunctionComponent } from "react";
import { useGetCryptosList } from "../../hooks/useGetCryptosList";
import { singleCrypto } from "../../Interfaces/interfaces";
import SingleCrypto from "../SingleCrypto/SingleCrypto";

interface Props {}

const Table: FunctionComponent<Props> = (): JSX.Element => {
  const { loading, data, error } = useGetCryptosList(50, 1);

  if (error)
    return <section>There is a problem. Please try again later</section>;

  if (loading) return <section>Loading, please wait</section>;
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b font-medium dark:border-neutral-500 bg-neutral-700 text-neutral-50">
        <tr>
          <th scope="col" className="text-center border border-slate-900">
            #
          </th>
          <th scope="col" className="px-3 py-4 border border-slate-900">
            Name
          </th>
          <th scope="col" className="px-3 py-4 border border-slate-900">
            1h % change
          </th>
          <th scope="col" className="px-3 py-4 border border-slate-900">
            24h % change
          </th>
          <th scope="col" className="px-3 py-4 border border-slate-900">
            Price
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          (crypto: singleCrypto, index: number): JSX.Element => (
            <SingleCrypto
              key={`${index}_${crypto?.name}`}
              index={index + 1}
              {...crypto}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default Table;
