import { formatDate } from 'ngx-bootstrap-th/chronos';

export class DateFormatter {
  format(date: Date, format: string, locale: string): string {
    return formatDate(date, format, locale);
  }
}
