export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="mb-6">
        <h1 className="text-4xl font-bold text-blue-700">家計簿アプリ</h1>
        <p className="text-gray-600 mt-2">ようこそ！今日の支出を確認しましょう。</p>
      </header>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📊 今日の合計支出</h2>
        <div className="bg-white shadow rounded-lg p-4 text-2xl text-red-500 font-bold">
          ¥3,200
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">📝 最近の支出</h2>
        <ul className="space-y-3">
          <li className="bg-white shadow p-4 rounded-lg flex justify-between">
            <span>ランチ</span>
            <span className="text-red-500">- ¥900</span>
          </li>
          <li className="bg-white shadow p-4 rounded-lg flex justify-between">
            <span>カフェ</span>
            <span className="text-red-500">- ¥450</span>
          </li>
          <li className="bg-white shadow p-4 rounded-lg flex justify-between">
            <span>電車</span>
            <span className="text-red-500">- ¥200</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
