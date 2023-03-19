import { FunctionComponent } from "react";
import { useGetCryptosList } from "../../hooks/useGetCryptosList";
import { singleCrypto } from "../../Interfaces/interfaces";
import SingleCrypto from "../SingleCrypto/SingleCrypto";
import styles from "./Table.module.scss";

interface Props {}

const Table: FunctionComponent<Props> = (): JSX.Element => {
  const { loading, data, error } = useGetCryptosList(50, 1);
  return (
    <section>
      {data.map(
        (crypto: singleCrypto, index: number): JSX.Element => (
          <SingleCrypto key={`${index}_${crypto?.name}`} crypto={crypto} />
        )
      )}
    </section>
  );
};

export default Table;
