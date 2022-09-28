import { Text } from 'react-native';
import { useQueries } from 'react-query';
import imp from '~/import.js'
import useIdRegister from '~/hooks/useIdRegister.js'

var load = imp(query => {

    if (query.isLoading) {
        return () => () => <Text>Loading...</Text>
    }

    if (query.isError) {
        return () => () => <Text>Error: {query.error.message}</Text>
    }

    if (query.isSuccess) {
        return query.data.default
    }
})

function Test1() {
    debugger
    var data, Test, res;

    data = imp`components Test comp`()
    Test = data.data;

    console.log(data);
    debugger;

    if (data.isLoading) {
        res = <Text>Loading...</Text>
    }

    if (data.isError) {
        res = <Text>Error: {data.error.message}</Text>
    }

    if (data.isSuccess) {
        res = <Test />
    }

    return (<>{res}</>)
}

function Test2() {
    var Test = imp`components/Test/comp`()

    //return <>{
    //    Test.isSuccess && Test({name:'Mario'})(<>
    //        <Text> this a children</Text>
    //    </>)
    //}</>

    return <>{Test.isSuccess && (
        <Test.comp>
            <Text> this a children</Text>
        </Test.comp>
    )}</>
}

function Test3() {
    return <>{
        load`components/Test/comp`()({ name: 'Mario' })(<>
            <Text> this a children</Text>
        </>)
    }</>
}

export default (<>
    <Test3 />
</>)