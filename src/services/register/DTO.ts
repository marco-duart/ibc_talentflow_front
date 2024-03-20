export namespace RegisterDTO {
  export interface IParams {
    name: string;
    cpf: string;
    email: string;
    password: string;
    photo?: File;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace LoginAPIDTO {
  export interface IParams {
    email: string;
    password: string;
  }
  export interface IResponse {
    id: number;
    name: string;
    photo_url: string;
    token: string;
  }
}

export namespace LoggedUserDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    id: number;
    name: string;
    photo_url: string;
  }
}

export namespace ForgetPasswordDTO {
  export interface IParams {
    cpf: string;
    email: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace ChangePasswordDTO {
  export interface IParams {
    cpf: string;
    email: string;
    action_key: string;
    password: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace GetTokenDTO {
  export interface IParams {
    cpf: string;
    email: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace ConfirmAccountDTO {
  export interface IParams {
    id: string;
    action_key: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace EmailAvailabilityDTO {
  export interface IParams {
    email: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}

export namespace CpfAvailabilityDTO {
  export interface IParams {
    cpf: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
  }
}
