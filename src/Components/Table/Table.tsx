import { FunctionComponent } from "react";
import { useGetCryptosList } from "../../hooks/useGetCryptosList";
import styles from "./Table.module.scss";

interface Props {}

const Table: FunctionComponent<Props> = (): JSX.Element => {
  const { loading, data, error } = useGetCryptosList(50, 1);

  return <section></section>;
};

export default Table;
