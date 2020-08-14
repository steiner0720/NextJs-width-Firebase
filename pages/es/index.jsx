// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_'
import ns0 from '../../locales/es/common.json'
import ns1 from '../../locales/es/home.json'
import ns2 from '../../locales/es/example.json'

const namespaces = { 'common': ns0, 'home': ns1, 'example': ns2 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="es" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"en","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'es'})
}








