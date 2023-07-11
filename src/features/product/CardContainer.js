import Card from '../../components/Card';
import useProduct from '../../hooks/useProduct';
export default function CardContainer() {
  const { product } = useProduct();
  return (
    <>
      <div className="grid gap-x-8 gap-y-8 grid-cols-2  px-4 pt-4 pb-16">
        {product.map(el => (
          <Card key={el.id} product={el} />
        ))}
      </div>
    </>
  );
}
