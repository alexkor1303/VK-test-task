import groups from '../data/groups.json';

export async function myFetch(ms: number) {
    return new Promise(resolve => setTimeout(() => resolve(groups), ms));
}
