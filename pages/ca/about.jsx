// @ts-nocheck
import I18nProvider from 'next-translate/I18nProvider'
import React from 'react'
import C from '../../pages_/about'
import ns0 from '../../locales/ca/common.json'
import ns1 from '../../locales/ca/about.json'

const namespaces = { 'common': ns0, 'about': ns1 }

export default function Page(p){
  return (
    <I18nProvider 
      lang="ca" 
      namespaces={namespaces}  
      internals={{"defaultLanguage":"en","isStaticMode":true}}
    >
      <C {...p} />
    </I18nProvider>
  )
}

Page = Object.assign(Page, { ...C })

if(C && C.getInitialProps) {
  Page.getInitialProps = ctx => C.getInitialProps({ ...ctx, lang: 'ca'})
}








