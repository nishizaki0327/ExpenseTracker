import { useState } from "react";
import { MonthlySelector } from "../features/monthly-report/components/monthly-selector";

export const MonthPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("2025-06");

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">月別支出レポート</h2>
      <MonthlySelector
        value={selectedMonth}
        onChange={setSelectedMonth}
        count={24}
        label="📅 表示月を選択"
      />

      <p className="mt-4 text-gray-600">選択中: {selectedMonth}</p>
    </div>
  );
};
