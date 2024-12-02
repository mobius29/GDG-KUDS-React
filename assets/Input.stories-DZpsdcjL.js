import{j as y,a as s,c as e,g as w,G as z}from"./prefix-C5ClyYxI.js";import{r as N}from"./index-DRjF_FHU.js";import{C as r}from"./colors-s21EB8E3.js";import{f as P}from"./index-B5ZI-g0m.js";import"./jsx-runtime-DR9Q75dM.js";const i=N.forwardRef((p,T)=>{const{colorType:S,type:c,size:u="small",label:l,helpText:o,status:d="default",className:C,icon:m,...v}=p,_=`${z}-input`,n=w(_);return y("div",{css:q,className:n([S,c,u],C),children:[l&&s("label",{css:R,className:n([l]),children:l}),y("div",{css:E,children:[s("input",{ref:T,type:c,css:[j,L[u],W[d]],...v}),m&&s("span",{css:[B],children:m})]}),o&&s("p",{css:[V,k[d]],className:n([o]),children:o})]})}),q=e({display:"flex",flexDirection:"column",gap:2,width:"100%"}),E=e({position:"relative"}),R=e({fontSize:12,fontWeight:500,color:r.primary[800],marginBottom:2}),V=e({fontSize:10,fontWeight:300,marginTop:5}),j=e({padding:"10px 20px",fontsize:14,display:"inline-flex",alignItems:"center",border:"1.2px solid",borderRadius:8,borderColor:r.primary[500],backgroundColor:r.primary[100],cursor:"text","&:focus":{outline:"none",color:r.primary[800],borderColor:r.primary[800]},"&:disabled":{backgroundColor:r.primary[200],borderColor:r.primary[300],cursor:"not-allowed"}}),L={small:e({width:200,height:14}),medium:e({width:260,height:24})},W={default:e({borderColor:r.primary[500]}),success:e({borderColor:r.green[500]}),error:e({color:r.red[500]})},k={default:e({color:r.primary[700]}),success:e({color:r.green[500]}),error:e({color:r.red[500]})},B=e({position:"absolute",right:10,top:"50%",transform:"translateY(-50%)",display:"flex",alignItems:"center",justifyContent:"center",pointerEvents:"none"});try{i.displayName="Input",i.__docgenInfo={description:"",displayName:"Input",props:{colorType:{defaultValue:null,description:"",name:"colorType",required:!1,type:{name:"enum",value:[{value:'"primary"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"ReactNode"}},helpText:{defaultValue:null,description:"",name:"helpText",required:!1,type:{name:"ReactNode"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"error"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}}}}}catch{}const X={title:"Input",component:i,tags:["autodocs"],args:{onChange:P(),placeholder:"Input"}},a={args:{colorType:"primary",type:"text",size:"small",status:"default",disabled:!1}},t={args:{colorType:"primary",type:"password",size:"small",status:"success",label:"Password",helpText:"Enter characters more than 8",disabled:!1}};var f,g,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    type: 'text',
    size: 'small',
    status: 'default',
    disabled: false
  }
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,b,I;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    colorType: 'primary',
    type: 'password',
    size: 'small',
    status: 'success',
    label: 'Password',
    helpText: 'Enter characters more than 8',
    disabled: false
  }
}`,...(I=(b=t.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const A=["Text","Password"];export{t as Password,a as Text,A as __namedExportsOrder,X as default};
