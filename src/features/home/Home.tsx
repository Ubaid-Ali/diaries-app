import React, { FC } from 'react'
import Diaries from '../diary/Diaries';
import Editor from '../entry/Editor';

const Home: FC = () => {
    return (
        <div className="two-cols" >
            <div className="right">
                <Diaries />
            </div>
            <div className="left">
                <Editor />
            </div>
        </div>
    )
}

export default Home;