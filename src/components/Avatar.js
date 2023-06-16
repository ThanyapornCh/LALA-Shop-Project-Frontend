import Profile from '../assets/images/profile.png';
export default function Avatar() {
  return (
    <img
      className="w-20 h-20 p-1 rounded-full ring-2 ring-sky-300 dark:ring-indigo-500 shadow-md "
      src={Profile}
      alt="user"
    />
  );
}
