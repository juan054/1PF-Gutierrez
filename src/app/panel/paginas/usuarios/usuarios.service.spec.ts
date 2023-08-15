import { UsuariosService } from "../usuarios.service";
import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing"

describe(('UsuariosService'), () => {

    let service : UsuariosService;
    let HttpController : HttpTestingController;
    
    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule, ],
            providers:[UsuariosService],
        });

       service = TestBed.inject(UsuariosService); 
       HttpController = TestBed.inject(HttpTestingController);
    });
    afterEach(() =>{
        HttpController.verify()
    })


    it('deberia hacer la solicitud de usuarios ',() => {

        service.cargandoUsuarios()
        const req = HttpController.expectOne('http://localhost:3000/usuarios');
        expect(req.request.method).toBe('GET');
    })





})
       