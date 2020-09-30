import React, {useState, useEffect, useContext} from 'react'
import {Redirect} from 'react-router-dom'

import ArticleForm from '../../components/articleForm'
import useFetch from '../../hooks/useFetch'
import {CurrentUserContext} from '../../contexts/currentUser'

const CreateArticle = () =>{
    const apiUrl = '/articles'
    const [{error, response}, doFetch] = useFetch(apiUrl)
    const [currentUserState] = useContext(CurrentUserContext)
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList : []
    }
    const [isSuccessfulSubmit, setIsSuccessfulSubmit] = useState(false)
    const handleSubmit = article =>{
        doFetch({
            method: 'post',
            data: {
                article
            }
        })
    }
    useEffect(()=>{
        if(!response)
            return
        setIsSuccessfulSubmit(true)
    }, [response])
    if(currentUserState.isLogged===false)
        return (<Redirect to='/'/>)
    if(isSuccessfulSubmit)
        return (<Redirect to={`/article/${response.article.slug}`}/>)
    return(
        <div>
            <ArticleForm 
                errors={(error && error.errors) || {}} 
                initialValues={initialValues} 
                onSubmit={handleSubmit}
            />
        </div>
    )
}

export default CreateArticle