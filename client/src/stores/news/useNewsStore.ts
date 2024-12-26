import {create} from "zustand/index";
import {News} from "../../models/dtos/general/news.ts";

export type NewsState = {
    news: News[]
}

const newsState: NewsState = {
    news: []
}

export type NewsDispatch = {
    addNews: (news: News[]) => void
}

const useNewsStore = create<NewsState & NewsDispatch>((set) => ({
    ...newsState,
    addNews: (news: News[]) => set((state => ({...state, news: [...state.news, ...news]})),),
}));


export { useNewsStore };
console.log("10")