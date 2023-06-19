import Profile from '../assets/images/profile.png';
export default function Avatar({ src, size }) {
  return (
    <img
      className={`h-${size} w-${size} p-1 rounded-full ring-2 ring-sky-300 dark:ring-indigo-500 shadow-md `}
      src={src || Profile}
      alt="user"
    />
  );
}
