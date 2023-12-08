import styles from '../styles/index.module.css'
import ListItems from './ListItems'
import ListPagination from '../../Pagination/components/ListPagination'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { generateQueryString } from '@/shared/helpers/queries-url/generateQueryString'
import { PathHelper } from '@/shared/helpers/path/path.helper'
import { getSidebarActiveListItem } from '@/shared/helpers/sidebar/getSidebarActiveListItem'
import { useAppDispatch, useAppSelector } from '@/shared/rtk/hooks'
import { fetchList } from '@/shared/rtk/slices/listSlice'
import { IListItem } from '../types/index.types'

/**
 * Represents a list component that displays a list of items and pagination controls.
 *
 * @param items - An array of items to display in the list.
 * @param paginationActive - A number of the pagination active
 * @param paginationList - A list of pagination
 */
export default function List() {
  const [items, setItems] = useState<IListItem[]>([])
  const [loadingItems, setLoadingItems] = useState<boolean>(true)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const pathname = usePathname()

  const currentQueries = pathname.split('&')

  const paginationActive = Number(currentQueries[2].split('=')[1])

  const isPostsOrSeries = PathHelper.isPathPostsOrSeries(pathname)

  const endpoint = `/${isPostsOrSeries}/${getSidebarActiveListItem(pathname)}?${generateQueryString(
    pathname.split('/').slice(-1)[0],
  )}`

  const dispatch = useAppDispatch()

  const { list, isLoading, error } = useAppSelector((state) => state.list)
  console.log({ list, isLoading, error })
  useEffect(() => {
    dispatch(fetchList(endpoint))
  }, [paginationActive])

  useEffect(() => {
    setItems(list)
    setLoadingItems(isLoading)
  }, [list, isLoading, error])
  return (
    <div className={styles.list_wrapper}>
      {loadingItems ? <h1>Loading</h1> : items.length ? <ListItems items={items} /> : <h1>{errorMsg}</h1>}
      <ListPagination />
    </div>
  )
}
