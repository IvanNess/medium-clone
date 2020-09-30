import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import useFetch from '../hooks/useFetch'

const PopularTags = () =>{
    const [{response, error, isLoading}, doFetch] = useFetch('/tags')
    useEffect(()=>{
        doFetch()
    }, [doFetch])
    return(
        <div>
            {error && <div>Error</div>}
            {isLoading && <div>Loading...</div>}
            {!isLoading && response && (
                <div className='side-bar'>
                    <p>Popular Tags</p>
                    <div className='tag-list'>
                        {response.tags.map(tag=>{
                            return (
                                <Link to={`/tags/${tag}`} className='tag-default tag-pill' key={tag}>
                                    {tag}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PopularTags