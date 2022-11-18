
const getUrlParams=(path:string,pattern:string)=>{

    const urlParts:string[]=pattern.split("/");
    let obj:object={};
    const pairChecker:string[]=["One","Two","Three", "Four", "Five", "Six", "Seven","Eight","Nine" ];
    
    const dynamicUrlParts:string[]=urlParts.filter(item=>{
        return item.startsWith(":");
    })

    const staticUrlParts:string[]=urlParts.filter(item=>{
        return !item.startsWith(":");
    })

    staticUrlParts.forEach((value,index)=>{
        dynamicUrlParts.forEach((dValue,dIndex)=>{
            if(value.includes(pairChecker[index])&&dValue.includes(pairChecker[index])){
                obj[dValue]=pairChecker[index];
            }
        })
    });

    return obj;

}

const objectDiff=(source:object, target:object) =>{
    let newKeys=Object.keys(target);
    let result={};
    
    newKeys.forEach((item,index)=>{
        if(typeof source[item]!=undefined && target[item]!=source[item]){ 
            let obj={new:target[item],old:source[item]};
            result[item]=obj;
        }
    });
    return result;
}
 