import type { FC } from "react";
import { generateMonthList } from "../utils/generate-month-list";

type Props = {
  value: string;
  onChange: (month: string) => void;
  count?: number;
  label?: string;
};

export const MonthlySelector: FC<Props> = ({
  value,
  onChange,
  count = 12,
  label = "月を選択",
}) => {
  const months = generateMonthList(count);

  return (
    <div>
      <label className="block text-sm text-gray-700 mb-1">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 rounded-md p-2 w-64"
      >
        {months.map((month) => (
          <option key={month} value={month}>
            {month.replace("-", "年")}月
          </option>
        ))}
      </select>
    </div>
  );
};
