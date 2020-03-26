

var sortProducts = function(productsset)
{
    let materials = [];
    let otherdescriptions = [];
    let percentages = [];
    let counter = 0;
    for (let obj of productsset)
    {
        materials.push(obj.Description[0]);
        
        if (counter == 0)
        {
            for(let x = 0;x < obj.Description.length; x++)
            {
                if (x>0)
                {
                    otherdescriptions.push(obj.Description[x]);
                }
            }
        }
        counter++;
        percentages.push(obj.Percentage);
    }
    
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

    let answer = productsset[0];
    answer.Description = desobjects;
    delete answer.Percentage;

    return answer;
}



module.exports.sortProducts = sortProducts;