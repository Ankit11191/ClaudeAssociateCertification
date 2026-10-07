import { CurriculumDay, DomainId } from '../types/curriculum';
import { MONTH_1_DAYS } from './curriculumMonth1';
import { MONTH_2_DAYS } from './curriculumMonth2';
import { MONTH_3_DAYS } from './curriculumMonth3';

export const ALL_CURRICULUM_DAYS: CurriculumDay[] = [
  ...MONTH_1_DAYS,
  ...MONTH_2_DAYS,
  ...MONTH_3_DAYS
];

export function getDayByNumber(dayNum: number): CurriculumDay | undefined {
  return ALL_CURRICULUM_DAYS.find(d => d.day === dayNum);
}

export function getDaysByMonth(month: 1 | 2 | 3): CurriculumDay[] {
  return ALL_CURRICULUM_DAYS.filter(d => d.month === month);
}

export function getDaysByDomain(domainId: DomainId): CurriculumDay[] {
  return ALL_CURRICULUM_DAYS.filter(d => d.domainId === domainId);
}

export function getMilestoneDays(): CurriculumDay[] {
  return ALL_CURRICULUM_DAYS.filter(d => d.isMilestone);
}
