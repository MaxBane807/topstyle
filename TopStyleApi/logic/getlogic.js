

var sortProducts = function(productsset)
{
    
    let prevName = "";
    let objToMake = 0;
    let newObjArrey = [];
    
    for (let obj of productsset){

        if (obj.Name == prevName)
        {
            prevName = obj.Name;
        }
        else
        {
            prevName = obj.Name;
            objToMake++;
        }
    }
    
    let globalcounter = 0;
    while (objToMake > 0)
    {
        let materials = [];
        let otherdescriptions = [];
        let percentages = [];
        let counter = 0;
        let answer = {};
        
        for (let y = globalcounter; y < 2; y++)
        {
            materials.push(productsset[y].Description[0]);
        
            if (counter == 0)
            {
                for(let x = 0;x < productsset[y].Description.length; x++)
                {
                    if (x>0)
                    {
                        otherdescriptions.push(productsset[y].Description[x]);
                    }
                }
            }
            counter++;
            percentages.push(productsset[y].Percentage);
            answer = productsset[globalcounter];
            globalcounter++;    
            
        }
        
        //Gör en loop här
        let otherDesObj = {text: otherdescriptions[0], type: otherdescriptions[1]};
        
        let desobjects = [];

        counter = 0;
        for (let mat of materials)
        {
            let matObj = {material: mat, percent: percentages[counter]};
            desobjects.push(matObj);
            counter++;
        }
        desobjects.push(otherDesObj);

        
        answer.Description = desobjects;
        delete answer.Percentage;

        newObjArrey.push(answer);
        objToMake--;
    }
    return newObjArrey;
}



module.exports.sortProducts = sortProducts;