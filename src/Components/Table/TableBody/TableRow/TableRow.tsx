import { FunctionComponent } from "react";
import { singleCrypto } from "../../../../Interfaces/interfaces";
import TableCell from "./TableCell/TableCell";

interface Props {
  index: number;
}

type CryptoValues = singleCrypto & Props;

const TableRow: FunctionComponent<CryptoValues> = ({
  name,
  index,
  current_price,
  price_change_percentage_1h_in_currency,
  price_change_percentage_24h,
  market_cap,
  image,
  symbol,
  loading,
}): JSX.Element => {
  const placeholder = loading ? "blur-md" : "";
  return (
    <tr className="border-b dark:border-neutral-500">
      <TableCell classesModified="text-center">{index}</TableCell>
      <TableCell classesModified="flex">
        <img src={image} alt={symbol} className="w-5 h-auto mr-2" />
        <p>
          {name}&nbsp;{symbol}
        </p>
      </TableCell>
      <TableCell placeholder={placeholder}>{current_price}$</TableCell>
      <TableCell
        classesModified={`whitespace-nowrap px-3 py-4 font-medium ${
          price_change_percentage_1h_in_currency >= 0
            ? "bg-green-500"
            : "bg-red-800"
        }`}
      >
        {price_change_percentage_1h_in_currency.toFixed(2)}%
      </TableCell>
      <TableCell
        placeholder={placeholder}
        classesModified={`whitespace-nowrap px-3 py-4 font-medium ${
          price_change_percentage_24h >= 0 ? "bg-green-500" : "bg-red-800"
        }`}
      >
        {price_change_percentage_24h.toFixed(2)}%
      </TableCell>
      <TableCell placeholder={placeholder}>
        {new Intl.NumberFormat("en-US").format(market_cap)}$
      </TableCell>
    </tr>
  );
};

export default TableRow;
