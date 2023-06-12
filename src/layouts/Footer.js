import FooterItem from './FooterItem';

export default function Footer() {
  return (
    <footer
      className="fixed w-full h-16 bg-white border-t-2 border-white
            sticky absolute left-0 bottom-0 right-0 text-2xl "
    >
      <div className="flex justify-around">
        <FooterItem />
      </div>
    </footer>
  );
}
