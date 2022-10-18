import React from "react"

export default class App extends React.Component{
  state ={
    tarefa: "",
    lista: []
  }
  handlechange = (e) => {
    this.setState({
      tarefa: e.target.value
    })
  }
  add = () => {
    this.setState({
      lista: this.state.lista.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      })
    })
  }
  remove =(id) =>{
    this.setState({
      lista: this.state.lista.filter((item)=> item.id !== id)
    })
  }
  render(){
    return(
      <div>
        <h1>Todo app </h1>
        <input onChange={this.handlechange}/>
        <button onClick={this.add}>Adicionar</button>
        {this.state.lista.map((item) =>(
          <div>
            <ul>
              <li>{item.tarefa}</li>
            </ul>
            <button onClick={() => this.remove(item.id)}>X</button>
            </div>
        ))}
      </div>
    )
  }
}