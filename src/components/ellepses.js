export const ellepses = (text)=>{
if(text.length>50){
    return text.substring(0,45) +"..."
}
return text
}