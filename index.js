const Arr = [
    {
        title:'Салам'
    },
    {
        title:'Hello'
    },
    {
        title:'Здраствуйте'
    },

]

const Arr2 = ['efwdrfergrre']

const Add = () =>{
    // localStorage.setItem('title','Salam')
    // Arr2.push(localStorage.getItem('title'))
    Arr2.shift([0])
    render()

}
let block = document.createElement("div")
document.body.append(block)
const render = () =>{
    let fragment = new DocumentFragment()
    Arr2.map((text)=>{
         let block2 = document.createElement('div')
         block2.innerHTML = `
           <h1>${text}</h1>
         `
     fragment.append(block2)
    })
    return fragment
}
block.append(render())

document.body.append(block)
