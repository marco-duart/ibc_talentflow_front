type Knowledge = {
  id: number
  title: string
  created_at: Date
  updated_at: Date
};


export namespace GetKnowledgesDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    knowledge: Knowledge[];
  }
}

export namespace CreateKnowledgeDTO {
  export interface IParams {
    candidate_knowledges_attributes: { knowledge_id: number }[]
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    knowledge: Knowledge;
  }
}

export namespace DeleteKnowledgeDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    knowledge: Knowledge;
  }
}
