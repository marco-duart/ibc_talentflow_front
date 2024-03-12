type Document = {
  id: string
  document_name: string
  document_number: string
  issue_date: Date
  location: string
  image: string
  created_at: Date
  updated_at: Date
  candidate_id: number
};

export namespace GetDocumentDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    document: Document;
  }
}

export namespace GetDocumentsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    document: Document[];
  }
}

export namespace CreateDocumentDTO {
  export interface IParams {
    document_name: string
    document_number: string
    issue_date: Date
    location: string
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    document: Document;
  }
}

export namespace UpdateDocumentDTO {
  export interface IParams {
    document_name: string
    document_number: string
    issue_date: Date
    location: string
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    document: Document;
  }
}

export namespace DeleteDocumentDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    document: Document;
  }
}
