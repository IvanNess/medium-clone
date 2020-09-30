import React, { useEffect, useContext, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import useFetch from '../../hooks/useFetch'
import TagList from '../../components/tagList'
import {CurrentUserContext} from '../../contexts/currentUser'


const Article = props => {
    const slug = props.match.params.slug
    const apiUrl = `/articles/${slug}`
    const [{ isLoading: fetchArticleIsLoading, error: fetchArticleError, response: fetchArticleResponse }, 
        doFetch] = useFetch(apiUrl)
    const [{ response: deleteArticleResponse }, doDeleteArticle] = useFetch(apiUrl)
    const [currentUserState] = useContext(CurrentUserContext)
    const [isSuccessfulDelete, setIsSuccessfulDelete] = useState(false)

    const isAuthor = () =>{
        if(!fetchArticleResponse || !currentUserState.isLogged)
            return false
        return fetchArticleResponse.article.author.userName === currentUserState.currentUser.userName
    }

    const deleteArticle = () =>{
        doDeleteArticle({method: 'delete'})
    }

    useEffect(() => {
        doFetch()
    }, [doFetch])
    useEffect(()=>{
        if(!deleteArticleResponse)
            return
        setIsSuccessfulDelete(true)
    }, [deleteArticleResponse])

    if(isSuccessfulDelete)
        return <Redirect to='/'/>

    return (
        <div className='article-page'>
            <div className='banner'>
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <div className='container'>
                        <h1>{fetchArticleResponse.article.title}</h1>
                        <div className='article-meta'>
                            <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                                <img src={fetchArticleResponse.article.author.image} alt='' />
                            </Link>
                        </div>
                        <div className='info'>
                            <Link to={`/profiles/${fetchArticleResponse.article.author.username}`}>
                                {fetchArticleResponse.article.author.username}
                            </Link>
                            <span className='date'>{fetchArticleResponse.article.createdAt}</span>
                        </div>
                        {isAuthor && (
                            <span>
                                <Link 
                                    to={`/article/${fetchArticleResponse.article.slug}/edit`} 
                                    className='btn btn-outline-secondary btn-sm'
                                >
                                    <i className='ion-edit'></i>
                                    Edit Article
                                </Link>
                                <button 
                                    className='btn btn-outline-danger btn-sm'
                                    onClick={deleteArticle}
                                >
                                    <i className='ion-trash-a'></i>
                                    Delete Article
                                </button>
                            </span>
                        )}
                    </div>
                )}
            </div>
            <div className='container page'>
                {fetchArticleIsLoading && <div>is Loading</div>}
                {fetchArticleError && <div>Error!!!</div>}
                {!fetchArticleIsLoading && fetchArticleResponse && (
                    <div className='row article-content'>
                        <div className='col-xs-12'>
                            <div>
                                <p>{fetchArticleResponse.article.body}</p>
                            </div>
                            <TagList tags={fetchArticleResponse.article.tagList} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Article