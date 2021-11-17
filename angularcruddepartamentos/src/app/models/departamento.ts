// nota: departamento.ts dentro de models es el modelo sobre el que trabajaremos para los departamentos, es decir, sabemos que un departamento contiene numero, nombre y localidad, aqui simplemente especificamos lo que hay y el tipo de dato que es
export class Departamento {
  constructor(
    public numero: number,
    public nombre: string,
    public localidad: string
  ) {}
}
