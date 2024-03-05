export interface ProjectType {
  id: number;
  attributes: {
    name: string;
    website?: string;
    description?: string;
    logo: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
    project_categories: {
      data: RelationType[];
    };
    project_chains: {
      data: RelationType[];
    };
  };
}

export interface RelationType {
  id: number;
  attributes: {
    name: string;
    projects: {
      data: ProjectType[];
    };
  };
}

export interface QueryResponse {
  projects: {
    meta: {
      pagination: {
        total: number;
      };
    };
    data: ProjectType[];
  };
  projectCategories: {
    data: RelationType[];
  };
  projectChains: {
    data: RelationType[];
  };
}
