import express from "express"

const porta = 7000;
const host = "0.0.0.0"

const app = express();
var listaCarros = [];


app.use(express.urlencoded({extended:true}));

app.get("/", (req,res) =>{
    res.send(`
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Página Inicial</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Concessionaria Veloz</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Veiculos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="/listaCarros">Lista de Veiculos</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <h1>Pagina Inicial</h1>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </body>
        </html>
    `);
    res.end();
})

app.get("/CadVeiculo", (req, res) => {
    res.send(
        `
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Página Inicial</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Concessionaria Veloz</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Veiculos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="/listaCarros">Lista de Veiculos</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div class="container w-75">
                    <form method="POST" action="/CadVeiculo"class="row g-3">
                        <fieldset>
                            <legend class="text-center">Cadastro de Veículos</legend>
                        </fieldset>
                        <div class="col-md-6">
                            <label for="modelo" class="form-label">Modelo</label>
                            <input type="text" class="form-control" id="modelo" name="modelo">
                        </div>
                        <div class=" col-md-4">
                            <label for="ano" class="form-label">Ano</label>
                            <select id="ano" class="form-select" name="ano">
                            <option value = "2025">2025</option>
                            <option value = "2024">2024</option>
                            <option value = "2023">2023</option>
                            <option value = "2022">2022</option>
                            <option value = "2021">2021</option>
                            <option value = "2020">2020</option>
                            <option value = "2019">2019</option>
                            <option value = "2018">2018</option>
                            </select>
                        </div>
                        <div class=" col-md-6">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" class="form-control" id="placa" name="placa">
                        </div>
                        <div class=" col-md-4">
                            <label for="marca" class="form-label">Marca</label>
                            <select id="marca" class="form-select" name="marca">
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="BYD">BYD</option>
                            <option value="Renault">Renault</option>
                            <option value="Hyundai">Hyundai</option>
                            </select>
                        </div>
                        <div class="col-12"><br>
                            <button type="submit" class="btn btn-primary">
                            Salvar</button>
                        </div>   
                    </form>
                </div>    
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </body>
        </html>
    `
    )
})

app.post("/CadVeiculo", (req,res) => {
    const modelo = req.body.modelo
    const ano = req.body.ano
    const placa = req.body.placa
    const marca = req.body.marca

    if(modelo && ano && placa && marca){
        listaCarros.push({
        modelo: modelo,
        ano: ano,
        placa: placa,
        marca: marca
        });
        res.redirect("/listaCarros")}
    else { let conteudo = `
        <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Página Inicial</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Concessionaria Veloz</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Veiculos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="/listaCarros">Lista de Veiculos</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div class="container w-75">
                    <form method="POST" action="/CadVeiculo"class="row g-3">
                        <fieldset>
                            <legend class="text-center">Cadastro de Veículos</legend>
                        </fieldset>`;
                        if(!modelo){
                            conteudo = conteudo + `
                            <div class="col-md-6">
                                <label for="modelo" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="modelo" name="modelo" required>
                                <span class= "text-danger">Por favor informe o modelo</span>
                            </div>
                            ` }
                        else {
                            conteudo = conteudo + `
                            <div class="col-md-6">
                                <label for="modelo" class="form-label">Modelo</label>
                                <input type="text" class="form-control" id="modelo" name="modelo" value="${modelo}" required>
                            </div>
                            `
                        }
                        if(!ano){
                            conteudo = conteudo + `
                            <div class=" col-md-4">
                            <label for="ano" class="form-label">Ano</label>
                            <select id="ano" class="form-select" name="ano" required>
                            <option value = "2025">2025</option>
                            <option value = "2024">2024</option>
                            <option value = "2023">2023</option>
                            <option value = "2022">2022</option>
                            <option value = "2021">2021</option>
                            <option value = "2020">2020</option>
                            <option value = "2019">2019</option>
                            <option value = "2018">2018</option>
                            </select>
                            <span class="text-danger">Informe o ano</span>
                        </div>
                            `
                        } else {
                            conteudo = conteudo + `
                                <div class=" col-md-4">
                            <label for="ano" class="form-label">Ano</label>
                            <select id="ano" class="form-select" name="ano" value="${ano}" required>
                            <option value = "2025">2025</option>
                            <option value = "2024">2024</option>
                            <option value = "2023">2023</option>
                            <option value = "2022">2022</option>
                            <option value = "2021">2021</option>
                            <option value = "2020">2020</option>
                            <option value = "2019">2019</option>
                            <option value = "2018">2018</option>
                            </select>
                        </div>
                            `
                        } if(!placa){
                            conteudo = conteudo + `
                            <div class=" col-md-6">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" class="form-control" id="placa" name="placa" required>
                            <span class="text-danger">Informe a placa</span>
                        </div>`
                        } else {
                            conteudo = conteudo + `<div class=" col-md-6">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" class="form-control" id="placa" name="placa" value="${placa}" required>
                        </div>`
                        }
                        if(!marca){
                            conteudo = conteudo + `
                            <div class=" col-md-4">
                            <label for="marca" class="form-label">Marca</label>
                            <select id="marca" class="form-select" name="marca">
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="BYD">BYD</option>
                            <option value="Renault">Renault</option>
                            <option value="Hyundai">Hyundai</option>
                            </select>
                        </div>
                            `
                        } else {
                            conteudo = conteudo + `<div class=" col-md-4">
                            <label for="marca" class="form-label">Marca</label>
                            <select id="marca" class="form-select" name="marca">
                            <option value="Fiat">Fiat</option>
                            <option value="Ford">Ford</option>
                            <option value="Chevrolet">Chevrolet</option>
                            <option value="Toyota">Toyota</option>
                            <option value="Honda">Honda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="BYD">BYD</option>
                            <option value="Renault">Renault</option>
                            <option value="Hyundai">Hyundai</option>
                            </select>
                        </div>
                            `
                        }
                        
                        
                        conteudo = conteudo + `<div class="col-12"><br>
                            <button type="submit" class="btn btn-primary">
                            Salvar</button>
                        </div>   
                    </form>
                </div>    
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </body>
        </html>
    `
    res.send(conteudo);
    }
    res.end();
})

app.get("/listaCarros",(req,res) => {
   let conteudo = `<html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <title>Página Inicial</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

            </head>
            <body>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Concessionaria Veloz</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Veiculos
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="/listaCarros">Lista de Veiculos</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
    <table class="table table-striped table-hover">
  <thead>
    <tr>
      <th scope="col">Modelo</th>
      <th scope="col">Ano</th>
      <th scope="col">Placa</th>
      <th scope="col">Marca</th>
    </tr>
  </thead>
  <tbody>`;
  for(let i=0; i < listaCarros.length; i++){
    conteudo = conteudo + `<tr>
      <td>${listaCarros[i].modelo}</td>
      <td>${listaCarros[i].ano}</td>
      <td>${listaCarros[i].placa}</td>
      <td>${listaCarros[i].marca}</td>
    </tr>`
  }
    
  conteudo = conteudo + `</tbody>
                    </table>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </body>
        </html>`
res.send(conteudo);
res.end();
})
app.listen(porta, host, () => {
    console.log(`Servidor em execução em http://${host}:${porta}/`);
});