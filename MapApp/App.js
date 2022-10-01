import { View } from 'react-native';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query'
import { StatusBar } from 'expo-status-bar';

import conf from './conf.json'
import { useGlobal, GlobalProvider } from '~/context/Global.js'
import Page from '~/page/manger.js'

var queryClient = new QueryClient({});

export default function App() {
    var [page, setPage] = useState(conf.pageDef);

    conf.setPage = setPage;

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <GlobalProvider def={conf}>
                    <Page page={page} />
                    <StatusBar style="auto" />
                </GlobalProvider>
            </QueryClientProvider>
        </>
    );
}
