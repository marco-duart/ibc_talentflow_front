type Application = {
  id: number;
  created_at: Date;
  updated_at: Date;
  candidate_id: number;
  hiring_process_stage_id: number;
};

type ApplicationDetail = {
  job_name: string;
  stage: string;
  application: Application;
};

export namespace GetApplicationDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    application: ApplicationDetail;
  }
}

export namespace GetApplicationsDTO {
  export interface IParams {
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    applications: Application[];
    pageable: {
      offset: number;
      page: number;
      page_size: number;
      total_page: number;
      total_item: number;
      paged: number;
    };
  }
}

export namespace CreateApplicationDTO {
  export interface IParams {
    hiring_process_stage_id: number;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    application: Application;
  }
}

export namespace DeleteApplicationDTO {
  export interface IParams {
    id: string;
    token: string;
  }
  export interface IResponse {
    error: boolean;
    message: string;
    code: number;
    application: Application;
  }
}
