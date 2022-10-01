import { Text } from 'react-native'

export default {
    function(query) {
        if (query.isLoading) {
            return [() => { }, true]
        }

        if (query.isError) {
            throw query.error.message;
        }

        if (query.isSuccess) {
            return [query.data.default, false]
        }
    },

    component(query) {
        var res, comp;
        if (query.isLoading) {
            return () => <Text>Loading...</Text>
        }

        if (query.isError) {
            return () => <Text style={{
                padding: 20,
                color: 'white',
                backgroundColor: 'red'
            }} >
                Error: {query.error.message
            }</Text>
        }

        if (query.isSuccess) {
            return query.data.default
        }
    }
}