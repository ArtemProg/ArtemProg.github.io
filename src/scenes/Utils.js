// @ts-check

const sizeScreenOrigin = () => {
    return {width: window.innerWidth, height: window.innerHeight};
}

const aspectRatioScreenOrigin = () => {
    const sizeScreen = sizeScreenOrigin();
    return sizeScreen.height / sizeScreen.width;
}

const sizeScreenGame = (scene) => {
    return {width: scene.scale.width, height: scene.scale.height};
}

const scaleGame = (scene) => {
    const sizeScreen = sizeScreenOrigin();
    const sizeGame = sizeScreenGame(scene);
    return {scaleWith: sizeScreen.width / sizeGame.width, scaleHeight: sizeScreen.height / sizeGame.height};
}

export {sizeScreenOrigin, sizeScreenGame, scaleGame};

