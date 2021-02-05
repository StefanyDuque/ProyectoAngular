import {Injectable} from '@angular/core';
import {isKeyof, Usuario, passwordStrongRegex, passwordMediumRegex} from '../app.component';
import {ConfigService, defaultOptions} from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  misUsuarios: Usuario[] = [];
  registro = {username: '', password: '', nombre: '', apellido: '', email: ''};
  newUsuario: Usuario;
  serviceOn = true;
  constructor(
    private configService: ConfigService,
  ) {
    this.initUsuarios();
  }

  initUsuarios(username: string = '') {
    this.misUsuarios = [];
    // traer usuarios y lo convertimos 
    const usuariosPromise = this.configService.get('usuarios').toPromise();
    usuariosPromise.then(res => {
      if (isKeyof(res.body, 'data')){
        let dataUsuarios:any = [];
        try{
          console.log('load data http');
          dataUsuarios = res.body;
        }catch (e) {
          console.error('error en data http: ' + e.toString());
        }
        // console.log(dataUsuarios); 
        this.misUsuarios = []; 
        dataUsuarios.forEach(dataUsuario => {
          if (dataUsuario != undefined) {
            // console.log(dataUsuario);
            this.misUsuarios.push(dataUsuario);
          }
        });
      }
      console.log(this.misUsuarios);
      if (this.misUsuarios.length <= 0) {
        this.loadAdminUsuario();
      }
      // console.log(this.misUsuarios);
      this.serviceOn = true;
      for (const miUsuario of this.misUsuarios) {
        if (miUsuario.username == username) {
          // console.log(`${miUsuario.username} == ${username}`);
          return miUsuario;
        }
      }
      return this.misUsuarios[0];
    }).catch(err => {
      console.error(err);
      this.serviceOn = false;
    });
    return usuariosPromise;
  }

  private loadAdminUsuario() {
    console.log('loading Admin usuario');
    const adminUser = {
      username: 'stefanyduque',
      password: 'JAZMINDUQUE1995',
      nombre: 'Yuranny Estefania',
      apellido: 'Duque',
      identificacion: '453724262632',
      correo: 'ysdiaz37@misena.edu.co',
      rol: {administrador: true},
      telefono: '9083063',
      fechaNacimiento: new Date('1995-02-02'),
      estatus: 1
    };
    this.crear(adminUser);
    this.misUsuarios.push(adminUser);
  }

  registroValidation(registro: any = {}){
    this.newUsuario = registro;
    this.newUsuario.identificacion = '1000000000';
    this.newUsuario.correo = registro.email;
    this.newUsuario.rol = {cliente: true};
    this.newUsuario.telefono = '9999999999';
    this.newUsuario.fechaNacimiento = new Date('1900-01-01');
    this.newUsuario.estatus = 0;
    // console.log(newUsuario);
    if (this.getUsuariosBy(this.newUsuario.username).length > 0) {
      return 10021;
    }
    if (this.getUsuariosBy(this.newUsuario.correo).length > 0) {
      return 10022;
    }
    if (this.newUsuario.apellido.length <= 0) {
      this.newUsuario.apellido = '.';
    }
    return 10000;
  }

  checkPassword(password){
    if (passwordStrongRegex.test(password)){
        return 10030;
    }
    if (passwordMediumRegex.test(password)){
        return 10032;
    }
    return 10031;
  }

  newRegistro() {
    const data: any = this.newUsuario;
    return this.crear(data);
    // this.misUsuarios.push(newUsuario);
    // return 10000;
  }

  private crear(data: any) {
    const options = defaultOptions;
    data.rol = JSON.stringify(data.rol);
    options.params = data;
    return this.configService
      .post('usuarios', JSON.stringify(data)).toPromise();
      /* .then(
      // .get('usuarios.create', options).toPromise().then(
      res => {
        console.log(res);
      }
    ).catch(
      err => {
        console.error(err);
      }
    );*/
  }

  getUsuariosBy(entrada: string) {
    const UsuariosBuscar: Usuario[] = [];
    entrada = entrada.toLowerCase();
    // console.log(this.misUsuarios);
    this.misUsuarios.forEach(miUsuario => {
      let datoUsuario = '|' + miUsuario.identificacion.toString().toLowerCase();
      datoUsuario += '|' + miUsuario.username.toLowerCase();
      datoUsuario += '|' + miUsuario.nombre.toLowerCase();
      datoUsuario += '|' + miUsuario.apellido.toLowerCase();
      datoUsuario += '|' + miUsuario.correo.toLowerCase() + '|';
      if (datoUsuario.indexOf('|' + entrada + '|') >= 0) {
        console.log('Usuario ?:: ' + datoUsuario);
        UsuariosBuscar.push(miUsuario);
      }
    });
    return UsuariosBuscar;
  }

  getUsuariosByRol(entrada: string) {
    //  console.log('Usuarios:: ' + this.misUsuarios);
    const UsuariosBuscar: Usuario[] = [];
    entrada = entrada.toLowerCase();
    this.misUsuarios.forEach(miUsuario => {
      const tipoUsuario = miUsuario.rol;
      switch (entrada) {
        case 'admin':
          if (tipoUsuario.administrador) {
            UsuariosBuscar.push(miUsuario);
          }
          break;
        case 'empresa':
          if (tipoUsuario.vendedor || tipoUsuario.proveedor) {
            UsuariosBuscar.push(miUsuario);
          }
          break;
        case 'agente':
          if (tipoUsuario.profesional || tipoUsuario.operario || tipoUsuario.coordinador) {
            UsuariosBuscar.push(miUsuario);
          }
          break;
        default :
          if (tipoUsuario.cliente) {
            UsuariosBuscar.push(miUsuario);
          }
          break;
      }
    });
    return UsuariosBuscar;
  }

  getUsuarios() {
    return this.misUsuarios;
  }
}
