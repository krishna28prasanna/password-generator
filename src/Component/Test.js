const checkboxList = [
    { id : 0,name : "uppercase",label : "Uppercase",checked:true},
    { id : 1,name : "lowercase",label : "Lowercase",checked:true},
    { id : 2,name : "symbols",label : "Symbols",checked:true},
    { id : 3,name : "numbers",label : "Numbers",checked:true}
]

function update(name,checked){
    const checkbox = checkboxList.find(val => val.name == name)
    if(checkbox){
        checkbox.checked = checked
    }
}
update("uppercase",false)
update("lowercase",false)
update("lowercase",true)
update("numbers",false)
console.log(checkboxList)