import { RegistrationStatus } from './course-registration.model';

export interface EclRegistration {
  id?: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  ecl_level: string;
  exam_center: string;
  status?: RegistrationStatus;
  created_at?: string;
}
