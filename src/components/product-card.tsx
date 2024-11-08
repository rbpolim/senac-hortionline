import Image from 'next/image'

import {
  Card,
  CardContent,
  CardDescription,
  // CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
// import { Button } from '@/components/ui/button'

type Props = {
  title: string
  price: number
  image: string
}

export function ProductCard({
  title,
  price,
  image,
}: Props) {
  return (
    <Card >
      <CardHeader>
        <CardTitle className='text-sm'>{title}</CardTitle>
        <CardDescription className='text-xs'>${price}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video">
          {!!image && (
            <Image
              alt="Product"
              src={image}
              fill
              className="object-cover rounded-md"
            />
          )}
        </div>
      </CardContent>
      {/* <CardFooter>
        <Button>
          Add to Cart
        </Button>
      </CardFooter> */}
    </Card>
  )
}
