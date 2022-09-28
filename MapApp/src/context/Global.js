import React, { useContext, createContext } from "react";
//import validateName from '../utilities/validate/name.js';

var arm = {};
var Context = createContext();

function validateName (name) {
  return (
      Array.isArray(name) ?
          (typeof name[0] == 'string' ? name[0] : '') :
          (typeof name == 'string' ? name : '')
  );
}

export function useGlobal(){
  return useContext(Context)
};

export function GlobalProvider({ children, def }) {
  var context = [
    function get(name = '') {
      name = validateName(name)
      return arm[name]
    },

    function set(name){
      return (value)=>{
        name = validateName(name);
        arm[name] = value
        arm = {...arm}
      }
    },

    function getAll(){
      return arm
    }
  ];

  arm = {...def};

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};