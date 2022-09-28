import { Text, View } from 'react-native'

import { useGlobal } from '~/context/Global.js'
import imp from '~/import.js'

var loadPage = imp(query => {
    if (query.isLoading) {
        return ()=><Text>Loading...</Text>
    }

    if (query.isError) {
        return ()=><Text>Error: {query.error.message}</Text>
    }

    if (query.isSuccess) {
        return query.data.default
    }
})

export default function ({ page }) {
    var [global, setGlobal] = useGlobal();

    var Page = loadPage`page`(page)`page`();
    console.log(page);

    return (<>
        <Page />
    </>)
}