const Events = () => {
    
    const handleMyEvent = (e) => {
        console.log(e);
        console.log("Ativou o evento");
    }


    const renderSomething = (x) => {
        if(x){
            return <h1>Renderizando o if</h1>
        } else {
            return <h1>Renderizando o else</h1>
        }
    }
    
    return(
        <div>
            <div>
               <button onClick={handleMyEvent}>Clique aqui</button> {/*Nao colocar () apos o nome do evento. Ao fazer isso, o codigo ira executar a funcao automaticamente e nao esperara o evento acontecer*/}
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também!</button>
                <button onClick={() => {
                        if (true){
                            console.log("Isso nao deveria existir");
                        }
                    }}>
                    Clica aqui vei
                </button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events;