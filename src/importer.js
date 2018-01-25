export default (moduleName) => {
    switch (moduleName) {
        case '@babel/preset-stage-0':
            return import('@babel/preset-stage-0');
        case '@babel/preset-stage-1':
            return import('@babel/preset-stage-1');
        case '@babel/preset-stage-2':
            return import('@babel/preset-stage-2');
        case '@babel/preset-stage-3':
            return import('@babel/preset-stage-3');
        case '@babel/preset-env':
            return import('@babel/preset-env');
        case '@babel/preset-es2015':
            return import('@babel/preset-es2015');
        case '@babel/preset-es2016':
            return import('@babel/preset-es2016');
        case '@babel/preset-es2017':
            return import('@babel/preset-es2017');
        case '@babel/preset-react':
            return import('@babel/preset-react');
        case '@babel/preset-flow':
            return import('@babel/preset-flow');
        default:
            throw `Can't find ${moduleName}`;
    }
}
