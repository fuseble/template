import debug from 'debug';

export const getDebug = (name: string) => debug(`template:${name}`);
