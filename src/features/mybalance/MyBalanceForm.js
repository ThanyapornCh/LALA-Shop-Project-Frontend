import useOrder from '../../hooks/useOrder';
import HistoryList from './HistoryList';

export default function MyBalanceForm() {
  const { checkOrder } = useOrder();
  return (
    <>
      <div className="flex  flex-col">
        <h1 className="text-gray-600 font-medium text-lg py-2">History</h1>
        {checkOrder.map(el => (
          <HistoryList key={el.id} checkOrder={el} />
        ))}
      </div>
    </>
  );
}
