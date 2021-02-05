import {Component, Input, OnInit} from '@angular/core';
import {UsuarioService} from '../../services/usuario.service';
import {Router} from '@angular/router';
import {Alertas} from '../../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
}) 
export class RegisterComponent implements OnInit {
  @Input() registro: any = {};
  alert = Alertas(0);
  statusOK = 10000;
  confirmpassword: any = '';
  alertaPassword = {type: 'black hide', message: ''};
  constructor(
    private myusuarioService: UsuarioService,
    private router: Router
  ) {
    this.registro = myusuarioService.registro;
    const serviceUser = myusuarioService.initUsuarios();
    serviceUser.catch(err => {
      console.log('error init usuarios' + err.message);
      this.alert = Alertas(500);
    });
  }

  ngOnInit(): void {
    // console.log(this.registro);
  }

  add(): void {
    // console.log(this.registro);
    const insUsuario = this.myusuarioService;
    const validation = insUsuario.registroValidation(this.registro);
    if(validation == this.statusOK){
      const promiseUser = insUsuario.newRegistro();
      // console.log(this.myusuarioService.misUsuarios);
      promiseUser
        .then(res => { 
          console.log(res);
          this.alert = Alertas(this.statusOK); 
        })
        .catch(err => {
          console.warn(err);
          this.alert = Alertas(this.statusOK + err.status); // 10500
          // this.alert.type = 'warning';
          // this.alert.message = err.error.message;
        });
    }else{
      this.alert = Alertas(validation);
    }
  }

  checkForm() {
    let emptyFields = this.registro.username.length <= 0;
    emptyFields = emptyFields || this.registro.password.length <= 0;
    emptyFields = emptyFields || this.registro.nombre.length <= 0;
    emptyFields = emptyFields || this.registro.email.length <= 0;
    if (emptyFields){
      this.alert = Alertas(10024);
      return false;
    }
    if (this.confirmpassword != this.registro.password){
      this.alert = Alertas(10023);
      return false;
    }
    const checkcode = this.myusuarioService.checkPassword(this.registro.password);
    if (checkcode != 10030){
      this.alertaPassword = Alertas(checkcode);
      return false;
    }
    if (this.passwordValidation()){
      this.add();
    }
    return true;
  }

  passwordValidation(){
    const checkcode = this.myusuarioService.checkPassword(this.registro.password);
    this.alertaPassword = Alertas(checkcode);
    if (checkcode != 10030){
      return false;
    }
    return true;
  }
}
