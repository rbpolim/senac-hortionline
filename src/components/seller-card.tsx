import Image from 'next/image'
import Link from 'next/link'
import { Plus, StarIcon } from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type Props = {
  title: string
  description: string
  rating: number
  image: string
  slug: string
}

export function SellerCard({
  title,
  description,
  rating,
  image,
  slug
}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className='text-sm'>{description}</CardDescription>
        <span className="text-sm font-bold">
        <StarIcon size={16} className="inline-block mr-1" />
        {rating}
        </span>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video">
          <Image
            alt="Product"
            src={image}
            fill
            className="object-cover rounded-md"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={slug}>
            Mais informações
          <Plus size={16} className="inline-block mr-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
