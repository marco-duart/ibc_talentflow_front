type Skill = {
  id: number
  title: string
  created_at: Date
  updated_at: Date
};


export namespace GetSkillsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    skill: Skill[];
  }
}

export namespace CreateSkillDTO {
  export interface IParams {
    candidate_skills_attributes: { skill_id: number }[]
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    skill: Skill;
  }
}

export namespace DeleteSkillDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    skill: Skill;
  }
}
