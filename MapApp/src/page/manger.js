
import iniImp from '~/import/initialize.js'
var { CompLoc } = iniImp('page')

export default function ({ page }) {
    return (<>
        <CompLoc comp={page} />
    </>)
}