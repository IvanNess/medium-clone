import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from './pages/globalFeed'
import Article from './pages/article'
import TagFeed from './pages/tagFeed'
import Settings from './pages/settings'
import YourFeed from './pages/yourFeed'
import CreateArticle from './pages/createArticle'
import EditArticle from './pages/editArticle'
import Authentication from './pages/authentication'
import UserProfile from './pages/userProfile'

export default () => {
    return (
        <Switch>
            <Route path='/profiles/:slug' component={UserProfile} />
            <Route path='/profiles/:slug/favorites' component={UserProfile} />
            <Route path='/tags/:slug' component={TagFeed} />
            <Route path='/feed' component={YourFeed} />
            <Route path='/settings' component={Settings} />
            <Route path='/' component={GlobalFeed} exact/>
            <Route path='/login' component={Authentication} />
            <Route path='/register' component={Authentication} />
            <Route path='/article/new' component={CreateArticle} />
            <Route path='/article/:slug/edit' component={EditArticle} />
            <Route path='/article/:slug' component={Article} />
        </Switch>
    )
}