import useProduct from '../../hooks/useProduct';
import Card from '../../components/Card';

export default function CardContainer() {
  const { product, search } = useProduct();
  return (
    <>
      <div className="grid gap-x-8 gap-y-8 grid-cols-2  px-4 pt-4 pb-16">
        {product
          .filter(el => {
            if (search == '') {
              return el;
            } else if (el.name.toLowerCase().includes(search.toLowerCase()))
              return el;
          })
          .map(el => (
            <Card key={el.id} product={el} />
          ))}
      </div>
    </>
  );
}
