

var sortProducts = function(productsset)
{
    
    newObjArrey = productsset.map((currVal,index,arrey) => {

        if (arrey[(index+1)] != undefined)
        {
            if (currVal.Name == arrey[(index + 1)].Name)
            {
                arrey[(index + 1)].MaterialDescription += ("," + currVal.MaterialDescription);
                
                arrey[(index + 1)].Percentage += ("," + currVal.Percentage);
            }
            else{
                return currVal;
            }
        }
        else
        {
            return currVal
        }
       
        
    });

    let nullFreeArrey = newObjArrey.filter(x => x != null);

    let finalarrey = nullFreeArrey.map((x) => {

        let arreyMaterial = x.MaterialDescription.split(",");
        let arreyPercentage = x.Percentage.toString().split(",");

        x.MaterialDescription = arreyMaterial;
        x.Percentage = arreyPercentage;

        return x;
    });
    
    return finalarrey;
}



module.exports.sortProducts = sortProducts;