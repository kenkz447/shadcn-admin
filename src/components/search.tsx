import { SearchIcon } from 'lucide-react'

import { useSearch } from '@/context/search-provider'
import { cn } from '@/lib/utils'

import { Button } from './ui/button'
import { Kbd, KbdGroup } from './ui/kbd'

type SearchProps = {
  className?: string
  type?: React.HTMLInputTypeAttribute
  placeholder?: string
}

export function Search({
  className = '',
  placeholder = 'Search',
}: SearchProps) {
  const { setOpen } = useSearch()

  return (
    <Button
      variant='outline'
      className={cn(
        'group relative w-full justify-start text-muted-foreground sm:w-40  md:flex-none lg:w-52 xl:w-64',
        className
      )}
      onClick={() => setOpen(true)}
    >
      <SearchIcon aria-hidden='true' />
      <span className='text-left flex-1'>{placeholder}</span>
      <KbdGroup className='hidden sm:flex'>
        <Kbd>⌘ + K</Kbd>
      </KbdGroup>
    </Button>
  )
}
