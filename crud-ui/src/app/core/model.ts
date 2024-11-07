  export class Produto {
    id: number;
    descricao: string;
    categoria = new CategoriaId;
  }
  
  export class CategoriaId {
    id: number;
  }   
  
  export class Categoria {
    id: number;
    descricao: string;
  }
  
  