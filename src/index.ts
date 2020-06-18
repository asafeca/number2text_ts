import { NumberService } from './components/service/number_service';
///THIS IS THE MAIN FUNCTION, CALL IT TO CONVERT NUMBRS
export function NumberToString(value: number): string {
  if (value >= 1000000000000000000 || value < 0) {
    return 'Not supported number';
  } else if (value === 0) return 'ZERO';
  else return NumberService.getInstance().numberWatching(value);
}
