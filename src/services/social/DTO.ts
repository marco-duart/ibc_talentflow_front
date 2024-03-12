type Social = {
  id: number
  title: string
  link: string
  created_at: Date
  updated_at: Date
  candidate_id: number
};

export namespace GetSocialDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    social: Social;
  }
}

export namespace GetSocialsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    social: Social[];
  }
}

export namespace CreateSocialDTO {
  export interface IParams {
    title: string
    link: string
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    social: Social;
  }
}

export namespace UpdateSocialDTO {
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
    social: Social;
  }
}

export namespace DeleteSocialDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    social: Social;
  }
}
