import type { Schema, Attribute } from '@strapi/strapi';

export interface CourseInfoCourseInfo extends Schema.Component {
  collectionName: 'components_course_info_course_infos';
  info: {
    displayName: 'courseInfo';
    icon: 'information';
  };
  attributes: {
    trainerName: Attribute.String;
    trainerSurname: Attribute.String;
    datetime: Attribute.DateTime;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'course-info.course-info': CourseInfoCourseInfo;
    }
  }
}
