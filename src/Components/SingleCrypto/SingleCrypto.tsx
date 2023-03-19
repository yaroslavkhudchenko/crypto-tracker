import { FunctionComponent } from "react";
import { singleCrypto } from "../../Interfaces/interfaces";

import styles from "./SingleCrypto.module.scss";

interface Props {
  crypto: singleCrypto;
}

const SingleCrypto: FunctionComponent<Props> = (): JSX.Element => {
  return <section></section>;
};

export default SingleCrypto;
