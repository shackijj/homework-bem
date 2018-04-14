import { decl } from 'bem-react-core';

import 'b:Icon m:actions';

export default decl({
    block: 'Post',
    elem: 'OptionsButton',
    mix: {
        block: 'Icon',
        mods: { actions: true }
    }
});
