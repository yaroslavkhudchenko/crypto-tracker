import { FunctionComponent } from "react";
import { singleCrypto } from "../../Interfaces/interfaces";

interface Props {
  index: number;
}

type CryptoValues = singleCrypto & Props;

const SingleCrypto: FunctionComponent<CryptoValues> = ({
  name,
  index,
}): JSX.Element => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap px-6 py-4 font-medium">{index}</td>
      <td className="whitespace-nowrap px-6 py-4 font-medium">{name}</td>
    </tr>
  );
};

export default SingleCrypto;
