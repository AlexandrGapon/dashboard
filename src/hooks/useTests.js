import { useMemo, useState } from 'react'

export const useSortedTests = (items, config = null) => {
    const [sortConfig, setSortConfig] = useState(config)
    
    const sortedItems = useMemo(() => {
        let sortableItems = [...items]
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1
                }
                return 0
            })
        }
        return sortableItems
    }, [items, sortConfig])

    const requestSort = (key) => {
        let direction = 'ascending'
        if (
            sortConfig &&
            sortConfig.key === key &&
            sortConfig.direction === 'ascending'
        ) {
            direction = 'descending'
        }
        setSortConfig({ key, direction })
    }

    return { items: sortedItems, requestSort, sortConfig, setSortConfig }
}

export const useTests = ({tests, config, query}) => {
    const { items, requestSort, sortConfig, setSortConfig } = useSortedTests(tests, config)

    const sortedAndSearchedTests = useMemo(() => {
        return items.filter(test => test.name.toLowerCase().includes(query.toLowerCase()))
    }, [query, items])

    return { sortedAndSearchedTests, requestSort, sortConfig, setSortConfig }
}