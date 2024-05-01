export default url =>{
    const paramString = url.include('?') ? url.split('&')[1].split('&') : [];
    paramString.forEach(param => {
        const paramSplit = param.split('=');
        param[paramSplit[0]] = paramSplit[1];
    });
    return param;
};