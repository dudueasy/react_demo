import React from 'react';


type Provider = (...args: any[]) => React.JSX.Element

export function composeProvider(...providers: Provider[]){
  return ({children} :{children: React.JSX.Element})=> {
    return providers.reduce((accumulator, Provider)=> {
      return <Provider>{accumulator}</Provider>
    }, children)
  }
}