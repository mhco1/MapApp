import iniImp from '~/import/initialize.js'
var { CompStd } = iniImp('components/form/components/submit');

export default function(){

    var handle = {
        press(event){
            alert('Submit press')
        }
    }

    return <>
        <CompStd comp='button'
            name = 'Calcular distancia'
            press = {handle.press}
        />
    </>
}