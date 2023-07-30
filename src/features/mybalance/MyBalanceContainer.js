import MyBalanceCover from '../../features/mybalance/MyBalanceCover';
import MyBalanceForm from '../../features/mybalance/MyBalanceForm';

export default function MyBalanceContainer() {
  return (
    <>
      <div className="bg-white block ">
        <div className="max-w-2xl mx-auto">
          <div className="w-full  ">
            <MyBalanceCover />
          </div>
          <div className="bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700  rounded-b-lg px-5 pt-5 pb-16  flex flex-col">
            <MyBalanceForm />
          </div>
        </div>
      </div>
    </>
  );
}
