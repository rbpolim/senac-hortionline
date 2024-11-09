type Props = {
  title: string
  price: number
  image: string
}


export function ProductCard({
  title,
  image,
  price
}: Props) {
  return (
    <div className="flex-shrink-0 w-[110px] max-w-xs mx-auto bg-card text-card-foreground shadow rounded-lg overflow-hidden border border-gray-200">
      <img src={image} alt="test" className="w-full h-16 object-cover brightness-80" />
      <div className="p-2">
        <h3 className="text-sm">{title}</h3>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-green-800 text-center w-full">R$ {price.toFixed(2)}</span>
        </div>
      </div>
    </div>
  ) 
}