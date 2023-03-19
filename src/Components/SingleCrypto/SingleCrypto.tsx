import { FunctionComponent } from "react";
import { singleCrypto } from "../../Interfaces/interfaces";

interface Props {
  index: number;
}

type CryptoValues = singleCrypto & Props;

const SingleCrypto: FunctionComponent<CryptoValues> = ({
  name,
  index,
  current_price,
  price_change_percentage_1h_in_currency,
}): JSX.Element => {
  return (
    <tr className="border-b dark:border-neutral-500">
      <td className="whitespace-nowrap text-center font-medium">{index}</td>
      <td className="whitespace-nowrap px-3 py-4 font-medium">{name}</td>
      <td
        className={`whitespace-nowrap px-3 py-4 font-medium ${
          price_change_percentage_1h_in_currency >= 0
            ? "bg-green-500"
            : "bg-red-800"
        }`}
      >
        {price_change_percentage_1h_in_currency.toFixed(2)}%
      </td>
      <td className="whitespace-nowrap px-3 py-4 font-medium">
        {current_price}$
      </td>
    </tr>
  );
};

export default SingleCrypto;
