const button = document.getElementById ('btn')

button .addEventListener ('click', (e) =>{
    e.preventDefault()
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const country = document.getElementById('country').value

   //const value = 'Hello ${name}, welcome to our amazing, ${country} '
   const value = 'hello' + ' ' + name + ' ' + 'welcome to our amazing ' +' '+ country
   
    //console.log(value)
    console.log(value)
})
const addButton =document.getElementById ("add-element-btn");
    const removeButton = document.getElementById ("remove-element-btn");
    const div = document.getElementById("my-div");
    let Element = [];
    console.log(Element)
    addButton.addEventListener("click", function () {
    const newElement = document.createElement("p");
    newElement.textcontent ="Alert";
    div.appendChild(newElement);
    element.push(newElement);
    });

    removeButton.addEventListener("click", function () {
        const lastElement = elements.pop();
        if (lastElement) {
            div.removeChild(lastElement)
        };
    });