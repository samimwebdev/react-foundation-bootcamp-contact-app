/* <div>
  <h1>Profiles</h1>
  <h2> My name is Samim</h2>
  <p> I am 28 </p>
  <p> I am a web developer </p>
</div> 
*/

// Rendering Elm in DOM(Javascript way)

// const elm = `
// <div class='Profiles'>
//   <h1>Profiles</h1>
//   <h2> My name is Samim</h2>
//   <p> I am 28 </p>
//   <p> I am a web developer </p>
// </div> `

// document.querySelector('.container').insertAdjacentHTML('afterbegin', elm)

// <div class='random'>
//   <h2>something....</h2>
//   <p>...</p>
//   <p>....</p>
// </div>

//React component
//Babel (Transfiler)
function CreateElm(props) {
  return (
    <div className='random'>
      <h2>I am {props.name}</h2>
      <p>I am {props.age}</p>
      <p>I am {props.profession}</p>
    </div>
  )
  // return React.createElement('div', { className: 'random' }, [
  //   React.createElement('h2', {}, `I am ${props.name}`),
  //   React.createElement('p', {}, `I am ${props.age}`),
  //   React.createElement('p', {}, `I am a ${props.profession}`)
  // ])
}

function GetProfiles() {
  return (
    <div id='profiles'>
      <CreateElm name='samim' age='28' profession='web programmer' />
      <CreateElm name='Khalil' age='22' profession='Graphic Designer' />
      <CreateElm name='Anis' age='20' profession='Marketer' />
    </div>
  )
  // return React.createElement(
  //   'div',
  //   { id: 'profiles' },
  //   React.createElement(createdElm, {
  //     name: 'samim',
  //     age: 28,
  //     profession: 'web developer'
  //   }),
  //   React.createElement(createdElm, {
  //     name: 'khalil',
  //     age: 22,
  //     profession: 'web designer'
  //   }),
  //   React.createElement(createdElm, {
  //     name: 'random',
  //     age: 20,
  //     profession: 'Marketer'
  //   })
  // )
}

ReactDOM.render(
  <GetProfiles />,
  // React.createElement(getProfiles),
  document.querySelector('.container')
)
