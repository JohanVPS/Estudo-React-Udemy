const TemplateExpressions = () =>{
    const name = "Orbita";
    const data = {
        age: 5,
        job: "Software House",
    }

    return(
        <div>
            <h1>Ola {name}, tudo bem?</h1>
            <p>Voce atua como: {data.job}</p>
            <p>4 + 4 = {4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    );
};

export default TemplateExpressions