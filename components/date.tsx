import { parseISO, format } from 'date-fns';

export default function Date({ sateString  }: {sateString: string}) {
  const date = parseISO(sateString);
  return <time dateTime={sateString}>{format(date, 'LLLL d, yyyy')}</time>;
}