import { decl } from 'bem-react-core';

import 'b:Icon m:heart';

export default decl({
    block: 'Post',
    elem: 'LikeButton',
    mix: [
        {
            block: 'Icon',
            mods: {heart: true}
        }
    ]
});
