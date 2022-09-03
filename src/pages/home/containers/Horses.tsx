import { FC, Suspense, useEffect, useState } from 'react'
import { Center, Pagination, Stack } from '@mantine/core'
import { HorseList, HorseListPlaceholder } from '@/components'
import { useHorses, Horse } from '@/services'
import { paginate } from './utils'
import { useNavigate } from 'react-router-dom'

type HorsesContainerProps = {
  initialPage?: number
  perPage?: number
}

const HorsesContainer: FC<HorsesContainerProps> = ({ initialPage = 1, perPage = 20 }) => {
  const navigate = useNavigate()
  const horses = useHorses()

  const [list, setList] = useState<Horse[]>([])
  const [page, setPage] = useState(initialPage)
  const totalPages = Math.ceil(horses.length / perPage)

  useEffect(() => {
    setList(paginate(horses, page, perPage))
  }, [horses, page])

  const handleOnView = (id: string) => {
    navigate(`/profile/${id}`)
  }

  const handleOnDelete = (id: string) => {
    console.log(`DELETE /horses/${id}`)
  }

  const renderPagination = () => {
    if (totalPages > 1) {
      return (
        <Center>
          <Pagination page={page} onChange={setPage} total={totalPages} />
        </Center>
      )
    }

    return null
  }

  return (
    <Stack>
      <HorseList horses={list} onViewHorse={handleOnView} onDeleteHorse={handleOnDelete} />
      {renderPagination()}
    </Stack>
  )
}

export const Horses: FC<HorsesContainerProps> = (props) => {
  return (
    <Suspense fallback={<HorseListPlaceholder count={4} />}>
      <HorsesContainer {...props} />
    </Suspense>
  )
}
