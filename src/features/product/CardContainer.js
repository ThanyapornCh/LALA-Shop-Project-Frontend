import Card from '../../components/Card';
export default function CardContainer() {
  return (
    <>
      <div className="grid gap-x-8 gap-y-8 grid-cols-2  px-4 pt-4 pb-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}
