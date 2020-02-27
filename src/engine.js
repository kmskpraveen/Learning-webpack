// Acts as entrypoint for webpack
import { changeH1 } from './text'

changeH1('Wow!!!')

if(module && module.hot) module.hot.accept()