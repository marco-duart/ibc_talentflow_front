type Professional = {
  id: number
  title: string
  link: string
  created_at: Date
  updated_at: Date
  candidate_id: number
};

export namespace GetProfessionalDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    professional: Professional;
  }
}

export namespace GetProfessionalsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    professional: Professional[];
  }
}

export namespace CreateProfessionalDTO {
  export interface IParams {
    title: string
    link: string
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    professional: Professional;
  }
}

export namespace UpdateProfessionalDTO {
  export interface IParams {
    title: string
    link: string
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    professional: Professional;
  }
}

export namespace DeleteProfessionalDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    professional: Professional;
  }
}
