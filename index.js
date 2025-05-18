import express from "express"

const porta = 7000;
const host = "0.0.0.0"

const app = express();
var listaCarros = [];
var listaVend = [];

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
                                Cadastros
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="#">Cadastro de Vendedores</a></li>
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
                                Cadastros
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="/CadVeiculo">Cadastro de Veiculos</a></li>
                                <li><a class="dropdown-item" href="#">Cadastro de Vendedores</a></li>
                            </ul>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
                <div class="container w-75">
                    <form method="POST" class="row g-3">
                        <fieldset>
                            <legend class="text-center">Cadastro de Veículos</legend>
                        </fieldset>
                        <div class="col-md-6">
                            <label for="modelo" class="form-label">Modelo</label>
                            <input type="text" class="form-control" id="modelo">
                        </div>
                        <div class=" col-md-4">
                            <label for="ano" class="form-label">Ano</label>
                            <select id="ano" class="form-select">
                            <option>2025</option>
                            <option>2024</option>
                            <option>2023</option>
                            <option>2022</option>
                            <option>2021</option>
                            <option>2020</option>
                            <option>2019</option>
                            <option>2018</option>
                            </select>
                        </div>
                        <div class=" col-md-6">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" class="form-control" id="placa">
                        </div>
                        <div class=" col-md-4">
                            <label for="marca" class="form-label">Marca</label>
                            <select id="marca" class="form-select">
                            <option>Fiat</option>
                            <option>Ford</option>
                            <option>Chevrolet</option>
                            <option>Toyota</option>
                            <option>Honda</option>
                            <option>Jeep</option>
                            <option>BYD</option>
                            <option>Renault</option>
                            <option>Hyundai</option>
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
    
})

app.listen(porta, host, () => {
    console.log(`Servidor em execução em http://${host}:${porta}/`);
});