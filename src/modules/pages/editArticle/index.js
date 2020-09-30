import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'

import ArticleForm from '../../components/articleForm'
import useFetch from '../../hooks/useFetch'
import {CurrentUserContext} from '../../contexts/currentUser'

const EditArticle = ({match})=>{
    const [currentUserState] = useContext(CurrentUserContext)
    
    const slug = match.params.slug
    const apiUrl = `/articles/${slug}`
    const [{response: fetchArticleResponse}, doFetchArticle] = useFetch(apiUrl)
    const [{response: updateArticleResponse, error: updateArticleError}, doUpdateArticle] = useFetch(apiUrl)
    const [initialValues, setInitialValues] = useState(null)
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)

    const handleSubmit = article =>{
        doUpdateArticle({
            method: 'put',
            data: {article}
        })
    }
    useEffect(()=>{
        doFetchArticle()
    }, [doFetchArticle])
    useEffect(()=>{
        if(!fetchArticleResponse)
            return
        const {
            title, body, description, tagList
        } = fetchArticleResponse.article
        setInitialValues({title, body, description, tagList})
    }, [fetchArticleResponse])
    useEffect(()=>{
        if(!updateArticleResponse)
            return
        setIsSuccessfulSubmit(true)
    }, [updateArticleResponse])

    if(isSuccessfulSubmit)
        return(
            <Redirect to={`/article/${slug}`}/>
        )
    if(currentUserState.isLogged===false)
        return(
            <Redirect to='/'/>
        )
    return(
        <ArticleForm 
            onSubmit={handleSubmit}
            errors={(updateArticleError && updateArticleError.errors) || {}}
            initialValues={initialValues}
        />
    )
}

export default EditArticle