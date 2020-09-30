import React from 'react'
import classNames from 'classnames'

import useFetch from '../hooks/useFetch'

const AddToFavorites = ({isFavorited, favoritesCount, articleSlug}) =>{
    const [{response}, doFetch] = useFetch(`/articles/${articleSlug}/favorite`)
    const handleLike =e=>{
        e.preventDefault()
        doFetch({
            method: isFavoritedWithResponse? 'delete': 'post'
        })
    }
    const isFavoritedWithResponse = response? response.article.favorited: isFavorited
    const favoritesCountWithResponse = response? response.article.favoritesCount: favoritesCount
    const buttonClasses =classNames({
        btn: true,
        'btn-sm': true,
        'btn-primary': isFavoritedWithResponse,
        'btn-outline-primary': !isFavoritedWithResponse
    })

    return (
        <button 
            className={buttonClasses}
            onClick={handleLike}
        >
            <i className='ion-heart'></i>
            <span>&nbsp; {favoritesCountWithResponse}</span>
        </button>
    )
}

export default AddToFavorites