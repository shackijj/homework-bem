import { decl, Bem } from 'bem-react-core';
import React, { Fragment } from 'react';

import 'e:Title';
import 'e:Description';
import 'e:Image';
import 'e:ChannelName';
import LikeButton from 'e:LikeButton';
import OptionsButton from 'e:OptionsButton';

export default decl({
    block: 'Post',
    mods: ({ size, image }) => ({ size, noImage: !image }),
    content({ title, titleColor, description, image, channelName }) {
      return (
        <Fragment>
            <Bem elem="Title" style={{color: titleColor}}>{title}</Bem>
            <Bem elem="Description">{description}</Bem>
            {image && <Bem 
                elem="Image"
                tag="img"
                src={`${image}@2x.png`}
                srcSet={`${image}@3x.png 2x`}
                alt={title}
            />}
            {channelName && <Bem elem="ChannelName">{channelName}</Bem>}
            <LikeButton/>
            <OptionsButton/>
        </Fragment>
      )
    }
});
