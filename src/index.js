module.exports = function check(str, bracketsConfig) {
  // your solution
    let array = str.split('');
    let left_mass = [];
    let rez_mass = [];
    let count, tf = 0;
    let obj = {};
    let left = 0, right = 0;
    let flag = true;

    for(let i = 0; i < bracketsConfig.length; i++){
        obj[bracketsConfig[i][0]] = bracketsConfig[i][1];
    }

    for(let i = 0; i < array.length; i++){
        for(let val in obj){
            if(array[i] == val && array[i] == obj[val]){
                if(flag == true){
                    left_mass.push(array[i]);
                    flag = false;
                    left++;
                } else if(flag == false){
                    left_mass.push(' ');
                    flag = true;
                    right++;
                }
            }else if(array[i] == val && array[i] != obj[val]){
                left_mass.push(array[i]);
                left++;
            } else if(array[i] == obj[val] && array[i] != val){
                left_mass.push(' ');
                right++;
            }
        }
    }

    if(left != right){
        return false;
    }

    for(let i = 0; i < left_mass.length; i++){
        if(left_mass[i] != ' '){
            rez_mass.push(obj[left_mass[i]]);
            count = rez_mass.length - 1;
        } else if(left_mass[i] == ' '){
            left_mass.splice(i,1,rez_mass[count]);
            rez_mass.splice(count,1);
            count--;
        }
    }

    for(let i = 0; i < left_mass.length; i++){
        if(left_mass[i] == array[i])
        {
            tf++;
        }
    }
    if (tf == left_mass.length){
        return true;
    } else {
        return false;
    }

}
