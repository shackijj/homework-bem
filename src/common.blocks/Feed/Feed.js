import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Post from 'b:Post';

import posts from './posts.json';

export default decl({
    block: 'Feed',
    content() {
        return (
            <Fragment>
                {posts.map((post, idx) => <Post key={idx} {...post}/>)}
            </Fragment>
        );
    }
});
