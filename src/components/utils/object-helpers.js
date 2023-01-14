export const updateObjectInArray =(items,ObjPropName,itemId,newObjectProps)=>{
    return items.map(i => {
        if (i[ObjPropName] === itemId) {
            return {
                ...i, ...newObjectProps
            }
        }
        return i;
    })
}