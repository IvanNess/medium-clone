import React, {useEffect, Fragment} from 'react'
import {stringify} from 'query-string'

import {getPaginator, limit} from '../../../utils'
import useFetch from '../../../hooks/useFetch'
import Feed from '../../../components/feed'
import Pagination from '../../../components/pagination'

const getApiUrl = ({username, offset, isFavorites}) =>{
    const params = isFavorites
        ? {limit, offset, favorited: username}
        : {limit, offset, author: username}
    return `/articles?${stringify(params)}`
}

const UserArticles = ({username, location, isFavorites, url}) =>{
    console.log('username', username, 'url ', url)
    const {offset, currentPage} = getPaginator(location.search)
    const apiUrl = getApiUrl({username, offset, isFavorites})
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)
    useEffect(()=>{
        doFetch()
    }, [doFetch, isFavorites, username])
    return(
        <div>
            {isLoading && <div>is Loading...</div>}
            {error && <div>Error!!!</div>}
            {!isLoading && response && (
                <Fragment>
                    <Feed articles={response.articles}/>
                    <Pagination 
                        total={response.articlesCount} 
                        limit={limit} 
                        currentPage={currentPage}
                        url={url}
                    />
                </Fragment>
            )}
        </div>
    )
}

export default UserArticles