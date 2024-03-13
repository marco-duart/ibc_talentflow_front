type DynamicForm = {
  id: number;
  title: string;
  description: string;
  department: string;
  created_at: Date;
  updated_at: Date;
};

type DynamicFormDetail = {
  id: number;
  title: string;
  description: string;
  department: string;
  created_at: Date;
  updated_at: Date;
  questions: {
    id: number;
    question: string;
    response_type: string;
    created_at: Date;
    updated_at: Date;
    dynamic_form_id: number;
  }[];
};

export namespace GetDynamicFormDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    form: DynamicFormDetail;
  }
}

export namespace GetDynamicFormsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    forms: DynamicForm[];
  }
}

export namespace CreateDynamicFormDTO {
  export interface IParams {
    title: string;
    description: string;
    department: string;
    theme: File;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    form: DynamicForm;
  }
}

export namespace UpdateDynamicFormDTO {
  export interface IParams {
    title?: string;
    description?: string;
    department?: string;
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    form: DynamicForm;
  }
}

export namespace DeleteDynamicFormDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    form: DynamicForm;
  }
}
